//Put source in line 10 for Avatar
import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import {useState} from 'react';
import './Chat.css'

function Chat() {
    const [input,setInput] = useState("");
    const [seed, setSeed] = useState("");


    const sendMessage = (e) =>{

    }
    return (
        <div className='Chat'>

            <div className="chat_header">
                <Avatar src=''/>
                
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
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
                
                <p className = {`chat_message ${false && `chat_reciever`}`}>
                <span className = 'chat_name'>~Rishabh</span>
                    Hey  
                <span className = 'chat_timestamp'>4:20AM</span>
                </p>
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
             
        </div>
    )
}

export default Chat
