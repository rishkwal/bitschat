import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import db from './firebase';

function SidebarChat({id, name, addNewChat}) {
    var link = `https://ui-avatars.com/api/?name=${name}`;
    const createChat =() => {
        const roomName = prompt("Please enter name for chat room")
    if (roomName) {
        //do some internal stuff
        db.collection('rooms').add({
            name: roomName
        });
    }
    };

return !addNewChat ? (
<div className='SidebarChat'>
    <Avatar src ={link}/>
    <div className = 'SidebarChat_info'>
        <h2>{name}</h2>
        <p>Last message...</p>
    </div>
</div>
): (
    <div onClick={createChat}
    className = "sidebarChat">
        <h2>Add new Chat</h2>
    </div>

)
}

export default SidebarChat;

