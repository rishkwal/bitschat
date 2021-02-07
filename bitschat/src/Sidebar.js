import './Sidebar.css';
import  {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'
import {useState, useEffect} from 'react';
import db from './firebase';
function Sidebar(){
    const[rooms, setRooms] = useState([]);

    useEffect(()=> {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot=> (
                setRooms(snapshot.docs.map(doc=>({
                    id: doc.id,
                    data: doc.data()
                })
            ))
        ))
        return () => {
            unsubscribe();
        }
            },[])

return( 
        <div className="sidebar"> 
            <div className = 'sidebar_header'>
            <Avatar/>
            <div className='sidebar_headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>    
            </div>
            </div>
            <div className='sidebar_search'>
                <div className = 'sidebar_searchContainer'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder='Search'></input>
                </div>

            </div>
            <div className='sidebar_chats'>
            <SidebarChat addNewChat/>
            {rooms.map(room =>(
                <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            ))}
            </div>

        </div>
    )
}
export default Sidebar;

