import '../../styles/DashboardPage/unread.css'
import {Link} from "react-router-dom"

function Unread({unreadMessages}){
    return(
        <div className="unread-and-states">
            <div className='unread'>
                <p>Unread Messages:</p>
                <Link 
                    // TODO: Should implement this
                    // to={} 
                    className='unread-number'>{unreadMessages}    
                </Link>
            </div>
            <div className="states">
                {/* TODO: fix this with the percentage */}
                <span><span className='red-colored-square'></span>tasks remaining</span>
                <div className='circles-container'>
                    <div className="circle" style={{animation: "angle-loop 2000ms forwards"}}></div>
                    <div className="circle-1"></div>
                </div>
            </div>
        </div>
    )
};
export default Unread;