import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../styles/DashboardPage/chats.css";

function Chats({ chats }) {
  const navigate = useNavigate();

  return (
    <Container fluid className="tickets-container mt-2" style={{ height: "50vh" }}>
      <h2 className="h4 mb-2 text-center fw-bold">Tickets</h2>
        {/* TODO: fix the w-100 in both */}
      <div style={{minWidth:"100%"}}className="table-scroll rounded shadow-sm">
        <table style={{minWidth:"100%"}} className="table table-bordered table-hover table-striped align-middle text-center mb-0">
          <thead className="table-dark">
            <tr>
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
