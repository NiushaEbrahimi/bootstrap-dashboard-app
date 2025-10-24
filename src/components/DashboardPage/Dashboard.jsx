import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";
import Activities from "./Activities";

function Dashboard() {
  return (
    <Container fluid className="vh-100 p-0">
    <div className="d-md-flex flex-md-row h-100">
        <Col xs={12} md={3} className="p-0">
        <SideBar />
        </Col>
        <Col xs={12} md={9} className="p-3 p-md-4 overflow-auto">
        <Activities />
        </Col>
    </div>
    </Container>
  );
}

export default Dashboard;