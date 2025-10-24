import '../../styles/DashboardPage/chats.css'
import { useNavigate } from "react-router-dom";

function Chats({chats}){
    const navigate = useNavigate();
    return(
        <div className='tickets-container'>
            <h2>Tickets</h2>
            <div className="table-container">
                <table>
                    <thead>
                        {/* TODO: fix this to stay on top */}
                        <tr className='table-header'>
                            <th>title</th>
                            <th>group</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chats.map((chat)=>{
                            return(
                                <tr 
                                    key={chat.id}
                                    onClick={() => navigate(`/${chat.id}`)}
                                >
                                    <td>{chat.title}</td>
                                    {/* TODO: fix this chat.group.split(" ")[0] */}
                                    <td className={`${chat.group.split(" ")[0]} group-td`}>{chat.group}</td>
                                    <td>{chat.status}</td>
                                </tr>   
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Chats;