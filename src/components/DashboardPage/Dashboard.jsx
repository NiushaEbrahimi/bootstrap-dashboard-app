import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Activities from "./Activities";

function Dashboard({username,chats}) {
  return (
    <Container fluid className="vh-100 all-dashboard-pages-container dashboard-container">
      <Row className="h-100 overflow-hidden">
          <Col xs={12} md={3} 
          // TODO: the border radius is not working properly because of overflow
            className="d-flex flex-column sidebar-sm rounded-start-4 p-3"
            style={{backgroundColor:"lightgrey"}}
          >
            <SideBar/>
          </Col>
          <Col xs={12} md={9} className="rounded-end-4 p-0 overflow-hidden activity-container vh-100">
            <Activities username={username} chats={chats}/>
          </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;