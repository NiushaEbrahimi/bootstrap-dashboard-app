// import "../../styles/DashboardPage/dashboard.css"
// import "../../styles/DashboardPage/ProfilePage/profile.css"
import SideBar from "./SideBar";
import image from "../../assets/images/profile.jpeg"
import { Container , Col , Row } from "react-bootstrap";

function Profile({username,email,setUsername}){
    return(
        <Container fluid className="vh-100 p-md-5 p-0">
            <Row className="h-100 ">
                <Col xs={12} md={3} 
                className="d-flex flex-column sidebar-sm bg-white rounded-start p-3"
                >
                    <SideBar/>
                </Col>
                <Col xs={12} md={9} 
                    className="bg-secondary p-5 h-100 rounded-end">
                    <div className="d-flex flex-row bg-white rounded overflow-hidden">
                        <div>
                            <img src={image} />
                        </div>
                        <div>
                            <h2>username: </h2>
                            <p>{username}</p>
                            <h2>email: </h2>
                            <p>{email}</p>
                        </div>
                    </div>
                    <button
                        className="btn btn-danger "
                        onClick={
                            ()=>{
                                setUsername("")
                            }
                        }
                    >logout</button>
                </Col>
            </Row>
        </Container>
    )
}
export default Profile;