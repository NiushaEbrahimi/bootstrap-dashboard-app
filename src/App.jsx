import { Container, Row, Col } from "react-bootstrap";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom"
import LogIn from './components/RegisterPage/LogIn'
import SignUp from './components/RegisterPage/SignUp'
import Slideshow from './components/RegisterPage/Slideshow'
import Dashboard from './components/DashboardPage/Dashboard'
import ChatDetail from './components/ChatsPAges/ChatDetail'
import Profile from "./components/DashboardPage/Profile"
import Help from "./components/DashboardPage/Help"
import chats from './data/chats.json'
// import "./styles/general.css"
import { useState } from "react"

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // TODO: when you refresh the page, the username and password are lost
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/register/login" replace />} />
        <Route
          path="/dashboard"
          >
            <Route path="dashboard"
              element={
                username === "" 
                  ? <Navigate to="/register/login" replace /> 
                  : <Dashboard username={username} password={password}/>
              }>
            </Route>
            <Route path="profile"
              element={
                username === "" 
                  ? <Navigate to="/register/login" replace /> 
                  : <Profile username={username} email={email} setUsername={setUsername}/>
              }>
            </Route>
            <Route path="help"
              element={
                username === "" 
                  ? <Navigate to="/register/login" replace /> 
                  : <Help username={username} password={password}/>
              }>
            </Route>
        </Route>
        {/* TODO: fix this, check the console */}
        <Route path='/register'>
          <Route path="login" element={
            // TODO: fix this
             <Container fluid className="w-100 vh-100 overflow-hidden d-flex align-items-center justify-content-center bg-light p-md-5">
              <Row className="w-100 overflow-hidden">
                <Col xs={12} md={4} className="mb-2 mb-md-0 d-flex justify-content-center align-items-center p-2 register-container">
                  <LogIn setUsername={setUsername} setPassword={setPassword} setEmail={setEmail}/>
                </Col>
                <Col xs={12} md={8} className="d-flex justify-content-center p-0">
                  <Slideshow />
                </Col>
              </Row>
            </Container>
          }/>
          <Route path="signup" element={
            <Container fluid className="w-100 vh-100 d-flex align-items-center justify-content-center bg-light">
              <Row className="w-100">
                <Col xs={12} md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
                  <SignUp username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail}/>  
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                  <Slideshow />
                </Col>
              </Row>
            </Container>
          }/>
        </Route>
        {chats.map((chat)=>{
            return(<Route path={`/${chat.id}`} element={
              <ChatDetail chatID={chat.id} />
            }/>)
          })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
