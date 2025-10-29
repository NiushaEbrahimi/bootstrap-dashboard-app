import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Activities from "./Activities";
import "../../styles/DashboardPage/dashboard.css" 

function Dashboard({username,chats,isDarkMode}) {
  return (
    <Container fluid className="vh-100 all-dashboard-pages-container dashboard-container">
      <Row className="h-100 overflow-hidden rounded-4">

          <Col xs={12} md={3} 
            className="d-flex flex-column sidebar-sm rounded-start-4 p-3 bgc-lighter-dark h-md-100"
          >
            <SideBar isDarkMode={isDarkMode}/>
          </Col>
          
          <Col xs={12} md={9} className="rounded-end-4 p-0 activity-container d-flex flex-column h-100">
            <Activities username={username} chats={chats} isDarkMode={isDarkMode}/>
          </Col>

      </Row>
    </Container>
  );
}

export default Dashboard;