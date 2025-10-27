import SideBar from "./SideBar";
import image from "../../assets/images/profile.jpeg"
import { Container , Col , Row, Card } from "react-bootstrap";


function Profile({username,email,setUsername,isDarkMode,setIsDarkMode}){
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return(
        <Container fluid className={`vh-100 all-dashboard-pages-container dashboard-container ${isDarkMode ? 'light-mode' : ''}`}>
            <Row className="h-100 overflow-hidden">
                <Col xs={12} md={3} 
                    className="d-flex flex-column sidebar-sm rounded-start-4 p-3 bgc-lighter-dark"
                >
                    <SideBar isDarkMode={isDarkMode}/>
                </Col>
                <Col xs={12} md={9} 
                    className="bgc-dark p-5 rounded-end-4 d-flex flex-column 
                    justify-content-center align-items-center gap-2"
                >
                    <div className="text-center">
                        <div>
                            <img src={image} className="rounded-circle"/>
                        </div>
                        <h4 className="h1 mt-3">{username}</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 bgc-lighter-dark p-3 rounded">
                        <h4 className="h3">Personal information</h4>
                        <h4 className="h3">Account Settings</h4>
                    </div>
                    <Row className="w-100 d-flex flex-row gap-3">
                        <Col className="rounded bgc-lighter-dark p-2">
                             <h5 className="h3 m-0">Email:</h5>
                             <p className="ms-2 fs-5">{email}</p>
                             <h5 className="h3 m-0 ">UserName:</h5>
                             <p className="ms-2 fs-5">{username}</p>
                        </Col>
                        <Col className="d-flex gap-2 flex-column">
                            <Row className="rounded bgc-lighter-dark p-2">
                                <div className="form-check form-switch">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="flexSwitchCheckDefault" 
                                        checked={isDarkMode} 
                                        onChange={toggleMode} 
                                    />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                                    </label>
                                </div>
                            </Row>
                            <Row className="rounded bgc-lighter-dark p-2 ">
                                <span className="fs-5 d-flex flex-row gap-2 justify-content-between align-items-center"> 
                                    you can log out and then also get in as a different user.
                                    <button
                                        type="button"
                                        className="btn btn-danger ps-4 pe-4 pt-2 pb-2 fs-5 hover:btn-danger-50"
                                        onClick={
                                            ()=>{
                                                setUsername("")
                                            }
                                        }>
                                        logout
                                    </button>
                                 </span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Profile;