//Put source in line 10 for Avatar
import React from 'react'
import {Avatar} from '@material-ui/core'
import './Chat.css'

function Chat() {
    return (
        <div className='Chat'>

            <div className="chat_header">
                <Avatar src=''/>
                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                </div> 
                <div className='chat_headerRight'></div>
            </div>
            <div className="chat_body">

            </div>
            <div className="chat_footer">

            </div>
             
        </div>
    )
}

export default Chat
