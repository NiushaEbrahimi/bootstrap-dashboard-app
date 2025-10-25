import image from '../../assets/images/profile.jpeg'
import Calendar from './Calendar'
import Chats from './Chats'
import chats from '../../data/chats.json'
import ActivityChart from "./ActivityChart"
import Unread from './Unread'
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'
// import the custom css

function Activities({username}){
    return(
        <>
         {/* <Container className=''> */}
            <header className="header d-flex justify-content-between bg-white p-3 bg-ms-dark text-md-white">
                <h2>Activites</h2> 
                <Link to={"/dashboard/profile"}>
                    <span className="header-profile">
                        <img src={image} alt="" />
                        <p>{username}</p>
                    </span>
                </Link>
            </header>
            <div className="activities-content m-0 p-4">
                <div className="content-container container-1"><Calendar/></div>
                <div className="content-container container-2"><Unread chats={chats}/></div>
                <div className="content-container container-3"><ActivityChart/></div>
                <div className="content-container container-4"><Chats chats={chats}/></div>
            </div>
        {/* </Container> */}
        </>
    )
};
export default Activities;