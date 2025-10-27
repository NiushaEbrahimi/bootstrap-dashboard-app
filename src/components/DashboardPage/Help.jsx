import "../../styles/DashboardPage/dashboard.css"
import SideBar from "./SideBar";
import { Container, Accordion, Col , Row } from "react-bootstrap";

function Help({isDarkMode}){
    return(
        <Container fluid className="vh-100 all-dashboard-pages-container dashboard-container">
            <Row className="h-100 overflow-hidden rounded-4">

                <Col xs={12} md={3} 
                    className="d-flex flex-column sidebar-sm rounded-start-4 p-3 bgc-lighter-dark"
                >
                    <SideBar isDarkMode={isDarkMode}/>
                </Col>

                <Col xs={12} md={9} className="bg-grey rounded-end-4 p-0 overflow-scroll vh-100 p-4 bgc-dark">

                    <h2 className="mb-4">Help & Support</h2>
                    
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0" className="accordion-item">
                            <Accordion.Header><h3 className="m-0">How do I log in to my account?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Go to the login page and enter your credentials.  
                                If you don’t have an account, click “Sign up.”
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className="accordion-item">
                            <Accordion.Header><h3 className="m-0">How do I reset my password?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Click “Forgot Password?” on the login page and follow the steps.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className="accordion-item">
                            <Accordion.Header><h3 className="m-0">How can I see my activity or chats?</h3></Accordion.Header>
                            <Accordion.Body className="bg-light">
                                Go to your dashboard — recent activities and chats are listed there.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <h2 className="mt-3">Contact Us</h2>

                    <div className="mt-3 rounded p-4 d-flex gap-3 flex-column" style={{backgroundColor:"var(--color-7)",color:"var(--color-black)"}}>
                        <span className="d-flex align-items-center text-center"><i class="bi bi-envelope-fill me-3 d-flex align-items-center mb-1"></i>Email:<a href="mailto:support@gmail.com" style={{textDecorationThickness:"1px",color:"var(--color-black)"}} className="ms-2">support@gmail.com</a></span>
                        <span className="d-flex align-items-center"><i class="bi bi-telephone-fill me-3 d-flex align-items-center mb-1"></i> Phone: 021 555 123-4567</span>
                        <span className="d-flex align-items-center"><i class="bi bi-pin-map-fill me-3 d-flex align-items-center mb-1"></i> Address: 123 Startup Street, Tehran, Iran</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Help;
