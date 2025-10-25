import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Activities from "./Activities";

function Dashboard() {
  return (
    <Container fluid className="vh-100 p-md-5 p-0">
    <div className="d-md-flex flex-md-row h-100">
        <Col xs={12} md={3} 
          className="d-flex flex-column sidebar-sm bg-white rounded-start p-3"
          >
          <SideBar/>
        </Col>
        <Col xs={12} md={9} className="bg-dark rounded-end p-0 overflow-hidden">
          <Activities />
        </Col>
    </div>
    </Container>
  );
}

export default Dashboard;