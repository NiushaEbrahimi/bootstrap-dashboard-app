import { useEffect, useState } from "react";
import { validateUser, saveCurrentUser } from "../../utils/authentication";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

function LogIn({setUsername, setPassword, setEmail}) {
    const navigate = useNavigate();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [ disabledVar,setDisabledVar] = useState(true)

    useEffect(()=>{
        if(usernameInput ===""|| passwordInput ===""){setDisabledVar(true)}
        else{setDisabledVar(false)}
    },[usernameInput,passwordInput])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (usernameInput && passwordInput) {
            const user = validateUser(usernameInput, passwordInput);
            if (user) {
                setUsername(user.username);
                setPassword(user.password);
                setEmail(user.email);
                saveCurrentUser(user);
                navigate("/dashboard/dashboard");
            } else {
                alert("Invalid username or password");
            }
        }
    }
    
    return(
    <Card className="p-0 p-md-3 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Card.Body className="pb-0 d-flex flex-column justify-content-center align-items-center align-items-md-start w-100">
            <h3 className=" mb-0 mb-md-2 text-center h1">Login</h3>
            <Form 
                className="w-100"
                onSubmit={(e)=>{
                    handleSubmit(e);
                }}>
                <Form.Group className="mb-3 w-100"> 
                    <Form.Floating className="p-1 w-100">
                        <Form.Control 
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            style={{fontSize:"1.5rem",border:"1px solid rgba(0,0,0,0.4)"}}
                            className="w-100"
                        />
                        <Form.Label htmlFor="username">Username: </Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className="mb-3 w-100"> 
                    <Form.Floating className="p-1 w-100">
                        <Form.Control 
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        style={{fontSize:"1.5rem",border:"1px solid rgba(0,0,0,0.4)"}}
                        className="w-100"
                    />
                        <Form.Label htmlFor="password">Password: </Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Container className="d-flex justify-content-center justify-content-md-start w-100">
                <div>
                <Button 
                    variant="primary"
                    type="submit"
                    disabled={disabledVar}
                    className="cursor-pointer mt-0 mt-md-2 mb-2 ps-3 pe-3 pt-1 pb-1 fs-4 w-100 w-md-auto"
                    onClick={handleSubmit}
                    >
                    Login
                </Button>
                </div>
                </Container>
            </Form>
                <small className="text-center">Don't have an account? 
                    <span 
                        onClick={() => {
                            navigate("/register/signup");
                        }}
                        className="text-primary fw-semibold m-2"
                        style={{cursor:"pointer"}}
                        >
                        Sign up
                    </span>
                </small>
            </Card.Body>
        </Card>
    )
     
}
export default LogIn;