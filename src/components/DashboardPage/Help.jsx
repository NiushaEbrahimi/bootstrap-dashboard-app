import "../../styles/DashboardPage/dashboard.css"
import SideBar from "./SideBar";
import { Container, Accordion, Col , Row } from "react-bootstrap";

function Help(){
    return(
        <Container fluid className="vh-100 all-dashboard-pages-container">
            {/* TODO: fix the overflow */}
            <Row className="h-100 overflow-scroll">
                <Col xs={12} md={3} 
                    className="d-flex flex-column sidebar-sm rounded-start-4 p-3"
                    style={{backgroundColor:"lightgrey"}}
                >
                    <SideBar/>
                </Col>
                <Col xs={12} md={9} className="bg-grey rounded-end-4 p-0 overflow-scroll vh-100 p-4">
                    <h2 className="mb-4 text-white">Help & Support</h2>
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h3 className="m-0">How do I log in to my account?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Go to the login page and enter your credentials.  
                                If you don’t have an account, click “Sign up.”
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h3 className="m-0">How do I reset my password?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Click “Forgot Password?” on the login page and follow the steps.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h3 className="m-0">How can I see my activity or chats?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Go to your dashboard — recent activities and chats are listed there.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h2 className="text-white mt-3">Contact Us</h2>
                    <div className="mt-3 rounded bg-white text-black p-4 d-flex gap-3 flex-column">
                        {/* TODO: center this */}
                        <span className="d-flex align-items-center"><i class="bi bi-envelope-fill me-3"></i>Email:<a href="mailto:support@gmail.com">support@gmail.com</a></span>
                        <span><i class="bi bi-telephone-fill me-3"></i> Phone: 021 555 123-4567</span>
                        <span><i class="bi bi-pin-map-fill me-3"></i> Address: 123 Startup Street, Tehran, Iran</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Help;
