import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

function SidebarChat({id, name, addNewChat}) {
    var avatarLink = `https://ui-avatars.com/api/?name=${name}`;
const [messages, setMessages] = useState("");

useEffect(()=> {
    if(id) {
        db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc)=>
            doc.data()))
        )
        
    }
},[]);

    const createChat =() => {
        const roomName = prompt("Please enter name for chat room")
    if (roomName) {
        db.collection('rooms').add({
            name: roomName,
        });
    }
    };

return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
        <div className='SidebarChat'>
    <Avatar src ={avatarLink}/>
    <div className = 'SidebarChat_info'>
        <h2>{name}</h2>
        <p>{messages[0]?.message}</p> 
    </div>
</div>
    </Link>

): (
    <div onClick={createChat}
    className = "sidebarChat">
        <h2 class='addNew'>Add New Chat</h2>
    </div>

)
}

export default SidebarChat;

