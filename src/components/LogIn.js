import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
     } //catch {
        //     setError("Failed to log in.")
        // }
        catch (err) {
                console.log(err)
        }
        setLoading(false)
    }

    return (
        <>
            {/* <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div> */}

            <form class="box" onSubmit={handleSubmit}>
                <h1>LOGIN</h1><br />
                {error && <Alert variant="danger">{error}</Alert>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
                {/* <input type="text" name="" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}"
                    placeholder="Date of birth" /> */}
                <br /><input type="submit" name="" disabled={loading} value="Login" /><br />

            </form>

            <div className="btn1">
                Don't have an account? <Link to="/forgot-password" style={{ color: "blue" }}>Forgot Password?</Link>
            </div>
            <div className="btn">
                Don't have an account? <Link to="/signup" style={{ color: "blue" }}>SIGN UP</Link>
            </div>
        </>
    )
}