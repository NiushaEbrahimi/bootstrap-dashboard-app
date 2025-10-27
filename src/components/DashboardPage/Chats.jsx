import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../styles/DashboardPage/chats.css";

function Chats({ chats }) {
  
  const navigate = useNavigate();

  return (
    <Container fluid className="tickets-container mt-2" style={{ height: "50vh" }}>
      <h2 className="h4 mb-2 text-center fw-bold">Tickets</h2>
      <div style={{minWidth:"100%"}}className="table-scroll rounded shadow-sm rounded-4">
        <table style={{minWidth:"100%"}}  className="table border-danger border-5 custom-table rounded-4 text-center">
          <thead className="bgc-dark">
            <tr className="bgc-dark">
              <th>Title</th>
              <th>Group</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="table-body-scroll">
            {chats.map((chat) => (
              <tr
                key={chat.id}
                className="chat-row"
                onClick={() => navigate(`/${chat.id}`)}
                style={{
                  cursor: "pointer",
                  fontFamily: "vazirmatn",
                  fontSize: "0.8rem",
                }}
              >
                <td>{chat.title}</td>
                <td className={`${chat.status_css_class} group-td`}>
                  {chat.group}
                </td>
                <td>{chat.status}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </Container>
  );
}

export default Chats;
