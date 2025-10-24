import { useEffect, useState } from "react";
import { getUsers } from "../../utils/authentication";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function LogIn({setUsername, setPassword, setEmail}) {
    const navigate = useNavigate();
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [ disabledVar,setDisabledVar] = useState(true)
    useEffect(()=>{
        if(usernameInput ===""|| passwordInput ===""){setDisabledVar(true)}
        else{setDisabledVar(false)}
    },[usernameInput,passwordInput])
    const handleSubmit= ()=>{
        if (usernameInput && passwordInput){
            const users = getUsers();
            const user = users.find((user) =>
                {
                    user.username === String(usernameInput) && user.password === String(passwordInput);
                    return user
                });  
            if (user){
                setUsername(usernameInput)
                setPassword(passwordInput)
                setEmail(user.email)
                navigate("/dashboard/dashboard");
            }else{
                alert("Invalid username or password")
            }
        }
    }
    return(
    <Card className="shadow p-1" style={{minWidth:"30vw"}}>
        <Card.Body>
            <h3 className="mb-2">Login</h3>
            <Form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit
                }}>
                <Form.Group>
                    <Form.Floating className="p-1">
                        <Form.Control 
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                        />
                        <Form.Label htmlFor="username">Username: </Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group>
                    <Form.Floating className="p-1">
                        <Form.Control 
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                        <Form.Label htmlFor="password">Password: </Form.Label>
                    </Form.Floating>
                </Form.Group>
                <Button 
                    variant="primary"
                    type="submit"
                    disabled={disabledVar}
                    className="cursor-pointer mt-2 mb-2"
                    onClick={handleSubmit}
                    >
                        
                    Login
                </Button>
            </Form>
                <small>Don't have an account? 
                    <span 
                        // TODO: should i use link instead?
                        //  should it be even span and p
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