import '../../styles/DashboardPage/unread.css'
import {Link} from "react-router-dom"

function Unread({unreadMessages , totalChats}){
    // since i didn't have a data for tasks remaining i did this with messages that are remaining
    const angle = (unreadMessages / totalChats) *360;
    return(
        <div className="unread-and-states">
            <div className='unread'>
                <p>Unread Messages:</p>
                <Link 
                    //  this should be the link to the unread tickets page
                    // to={}
                    className='unread-number'>{unreadMessages}    
                </Link>
            </div>
            <div className="states">
                <span><span className='red-colored-square'></span>tasks remaining</span>
                <div className='circles-container'>
                    <div className="circle" style={{"--rotation-angle-react":`${angle}deg`}}></div>
                    <div className="circle-1"></div>
                </div>
            </div>
        </div>
    )
};
export default Unread;