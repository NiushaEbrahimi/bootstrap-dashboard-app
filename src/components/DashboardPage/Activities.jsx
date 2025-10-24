import image from '../../assets/images/profile.jpeg'
import Calendar from './Calendar'
import Chats from './Chats'
import chats from '../../data/chats.json'
import ActivityChart from "./ActivityChart"
import Unread from './Unread'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

function Activities({username}){
    return(
        <section className="activities section-dashboard">
            <header className="activities-header">
                <h2>Activites</h2>
                <Link to={"/dashboard/profile"}>
                    <span className="header-profile">
                        <img src={image} alt="" />
                        <p>{username}</p>
                    </span>
                </Link>
            </header>
            <div className="activities-content">
                <div className="content-container container-1"><Calendar/></div>
                <div className="content-container container-2"><Unread chats={chats}/></div>
                <div className="content-container container-3"><ActivityChart/></div>
                <div className="content-container container-4"><Chats chats={chats}/></div>
            </div>
        </section>
    )
};
export default Activities;