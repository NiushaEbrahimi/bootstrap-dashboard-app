import { useState } from "react";
import { addUser, getUsers } from "../../utils/authentication";
import { useNavigate } from "react-router-dom";
import {Form, Button, Card} from 'react-bootstrap'

function SignUp({ setUsername, setPassword, setEmail }) {
    const navigate = useNavigate();
    const [passwordChecking,setPasswordChecking] = useState(false)
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        errors: {
            emailUsed: false,
            invalidEmail: false,
            usernameUsed: false,
            shortPassword: false,
            noNumber: false,
            upperCase: false
        },
        ready: false,
    });

    const numberRegex = /\d/;
    
    const upperCaseRegex = /[A-Z]/

    const handleChange = (field, value) => {
        let newErrors = { ...formState.errors };
        let ready = false;
        
        if (field === "email") {
            const emailUsed = getUsers().some(u => u.email === value);
            newErrors.emailUsed = emailUsed;
            if(value.slice(-10)!=="@gmail.com"){
                newErrors.invalidEmail = true
            }else{
                newErrors.invalidEmail = false
            }
            setEmail(value);
        }

        if (field === "username") {
            const usernameUsed = getUsers().some(u => u.username === value);
            newErrors.usernameUsed = usernameUsed;
            setUsername(value);
        }

        if (field === "password") {
            newErrors.shortPassword = value.length < 8;
            newErrors.noNumber = !numberRegex.test(value);
            newErrors.upperCase = !upperCaseRegex.test(value);
            setPassword(value);
        }

        ready = !Object.values(newErrors).some(Boolean) && Object.values(formState).slice(0,3).every(value => value);

        setFormState(prev => ({
            ...prev,
            [field]: value,
            errors: newErrors,
            ready,
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.ready) {
            addUser({
                username: formState.username,
                email: formState.email,
                password: formState.password,
            });
            navigate("/dashboard/dashboard");
            } else {
            // TODO: shake animation
            alert("Please complete the form correctly");
        }
    };

    return (
        <Card className="shadow p-1" style={{minWidth:"30vw"}}>
            <Card.Body>
                <h3>Sign up</h3>
                <Form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        handleSubmit
                }}>
                    <Form.Group className="m-2">
                        <Form.Floating>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formState.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                            <Form.Label htmlFor="email">Email:</Form.Label>
                        </Form.Floating>
                        {formState.errors.emailUsed && (
                        <p className="checking">❌ This email is already in use.</p>
                        )}
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Floating>
                            <Form.Control
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={formState.username}
                                onChange={(e) => handleChange("username", e.target.value)}
                            />
                            <Form.Label htmlFor="username">Username:</Form.Label>
                        </Form.Floating>
                        {formState.errors.usernameUsed && (
                            <p className="checking">❌ This username is already taken.</p>
                            )}
                    </Form.Group>
                    <Form.Group className="m-2">
                        <Form.Floating>
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={formState.password}
                                onChange={(e) => {
                                    if(e.target.value.length > 0){
                                        setPasswordChecking(true);
                                    }
                                    handleChange("password", e.target.value)
                                }}
                            />
                            <Form.Label htmlFor="password">Password:</Form.Label>
                            {passwordChecking ? <div className="checking">
                                {formState.errors.shortPassword ?
                                <p className="checking">❌ Password must be at least 8 characters long.</p>
                                :<p className="checking">✅  Password must be at least 8 characters long.</p>
                                }
                                {formState.errors.noNumber ?
                                <p className="checking">❌ Password must contain at least one number.</p> 
                                :<p className="checking">✅ Password must contain at least one number.</p> 
                                }
                                {formState.errors.upperCase ?
                                <p className="checking">❌ Password must contain at least one UpperCase Letter.</p>
                                :<p className="checking">✅ Password must contain at least one UpperCase Letter.</p>
                                }
                                </div>
                            : null}
                        </Form.Floating>
                    </Form.Group>
                    <Button type="submit" disabled={!formState.ready}
                    className="cursor-pointer">
                        sign up
                    </Button>
                </Form>
                <small className="signup-login-link">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/register/login")}
                        // TODO: text primary or link ? 
                        className="fw-semibold link-primary"
                        style={{cursor:"pointer"}}
                    >
                    Login
                    </span>
                </small>
            </Card.Body>
        </Card>
    );
}

export default SignUp;
