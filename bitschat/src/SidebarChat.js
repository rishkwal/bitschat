import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat({addNewChat}) {
    var name = 'Rishabh Khandelwal';
    var link = `https://ui-avatars.com/api/?name=${name}`;
    const createChat =() => {
        const roomName = prompt("Please enter name for chat")
    if (roomName) {
        //do some internal stuff
    }
    };

return !addNewChat ? (
<div className='SidebarChat'>
    <Avatar src ={link}/>
    <div className = 'SidebarChat_info'>
        <h2>Room Name</h2>
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

