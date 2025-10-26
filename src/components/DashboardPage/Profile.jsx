// import "../../styles/DashboardPage/dashboard.css"
// import "../../styles/DashboardPage/ProfilePage/profile.css"
import SideBar from "./SideBar";
import image from "../../assets/images/profile.jpeg"
import { Container , Col , Row, Card } from "react-bootstrap";

function Profile({username,email,setUsername}){
    return(
        <Container fluid className="vh-100 all-dashboard-pages-container">
            <Row className="h-100 ">
                <Col xs={12} md={3} 
                    className="d-flex flex-column sidebar-sm rounded-start-4 p-3"
                    style={{backgroundColor:"lightgrey"}}
                >
                    <SideBar/>
                </Col>
                <Col xs={12} md={9} 
                    className="bg-grey p-5 rounded-end-4 d-flex flex-column 
                    justify-content-center align-items-center">
                    
                    <Card className="d-flex flex-row bg-white p-3 shadow">
                        <div>
                            <img src={image} className="rounded-circle"/>
                        </div>
                        <Card.Body>
                            <h2>username: </h2>
                            <p>{username}</p>
                            <h2>email: </h2>
                            <p>{email}</p>
                        </Card.Body>
                    </Card>
                    <button
                        type="button"
                        className="btn btn-danger mt-3 p-2 fs-5 hover:btn-danger-50"
                        onClick={
                            ()=>{
                                setUsername("")
                            }
                        }>
                        logout
                    </button>
                    
                    
                </Col>
            </Row>
        </Container>
    )
}
export default Profile;