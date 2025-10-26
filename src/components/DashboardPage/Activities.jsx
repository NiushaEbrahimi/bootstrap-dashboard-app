import image from '../../assets/images/profile.jpeg'
import Calendar from './Calendar'
import Chats from './Chats'
import ActivityChart from "./ActivityChart"
import Unread from './Unread'
import { Link } from 'react-router-dom'

function Activities({username,chats}){
    return(
        <>
            <header className="d-none d-md-flex justify-content-between p-3 bg-white">
                <h2>Activites</h2> 
                <Link to={"/dashboard/profile"}>
                    <span className="header-profile">
                        <img src={image} alt="" />
                        <p>{username}</p>
                    </span>
                </Link>
            </header>
            <div className="activities-content m-0 p-4 bg-grey ">
                <div className="content-container container-1"><Calendar/></div>
                <div className="content-container container-2"><Unread chats={chats}/></div>
                <div className="content-container container-3"><ActivityChart/></div>
                <div className="content-container container-4"><Chats chats={chats}/></div>
            </div>
        </>
    )
};
export default Activities;