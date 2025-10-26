import "../../styles/DashboardPage/dashboard.css"
import SideBar from "./SideBar";
import { Container, Row, Col } from "react-bootstrap";

function Help(){
    return(
        <Container fluid className="vh-100 all-dashboard-pages-container">
            <Row className="h-100 overflow-hidden">
                <Col xs={12} md={3} 
                    className="d-flex flex-column sidebar-sm rounded-start-4 p-3"
                    style={{backgroundColor:"lightgrey"}}
                >
                    <SideBar/>
                </Col>
                <Col xs={12} md={9} className="bg-grey rounded-end-4 p-0 overflow-hidden vh-100">
                    <h1>hello</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default Help;