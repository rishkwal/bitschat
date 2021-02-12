//Put source in line 10 for Avatar
import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import './Chat.css'
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function Chat() {
    const [input,setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name));
        
            db.collection('rooms')
            .doc(roomId)
            .collection("messages")
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot)=> 
                    setMessages(snapshot.docs.map((doc) =>
                    doc.data()))
                
                    );
                }
    }, [roomId] )

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log('User:');
        console.log(input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");

        
    }

    
    return (
        (<div className='Chat'>

            <div className="chat_header">
                <Avatar src={`https://ui-avatars.com/api/?name=${roomName}`}/>
                
                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
                </div> 
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) =>(
                    <p className = {`chat_message ${message.name === user.displayName && `chat_reciever`}`}>
                <span className = 'chat_name'>~{message.name}</span>
                    {message.message}  
                <span className = 'chat_timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}
                </span>
                </p>
                ))}
                
                {/*<p className = {`chat_message ${false && `chat_reciever`}`}>
                <span className = 'chat_name'>~Arjun</span>
                    High?  
                <span className = 'chat_timestamp'>4:22AM</span>
                </p>*/}
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon/>

                </IconButton>
            <form>
                <input 
                    value={input} 
                    className='send_message' 
                    onChange={e => setInput(e.target.value)} 
                    type="text"
                    placeholder = "Type a message"
                />
            <button onClick={sendMessage} type='submit'>
            <IconButton>
                <SendIcon/>
            </IconButton>
            </button>
            </form>
                <IconButton>
                    <MicIcon className="micIcon"/>
                </IconButton> 
            </div>
             
        </div>)
    )
}

export default Chat

