import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../css/signup.css';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match.")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            {/* <div className="box">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="input" type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div> */}
            <form class="box" onSubmit={handleSubmit}>
                <h1>REGISTER</h1><br />
                {error && <Alert variant="danger">{error}</Alert>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
                <input type="password" name="" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                {/* <input type="text" name="" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}"
                    placeholder="Date of birth" /> */}
                <br /><input type="submit" name="" disabled={loading} value="Signup" /><br />
            </form>
            <div className="btn">
                Already have an account? <Link to="/login" style={{ color: "blue" }}>LOG IN</Link>
            </div>
        </>
    )
}