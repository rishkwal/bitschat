import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';
import { Link } from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {
    var avatarLink = `https://ui-avatars.com/api/?name=${name}`;
    const createChat =() => {
        const roomName = prompt("Please enter name for chat room")
    if (roomName) {
        id = Math.random();
        db.collection('rooms').add({
            name: roomName,
            id: id
        });
    }
    };

return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
        <div className='SidebarChat'>
    <Avatar src ={avatarLink}/>
    <div className = 'SidebarChat_info'>
        <h2>{name}</h2>
        <p>Last message...</p> 
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

