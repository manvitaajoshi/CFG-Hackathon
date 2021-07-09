import React, { useRef, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import "../css/forgetPassword.css"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }



    return (
        <>
            <div className="fg" >
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <div class="alert alert-success" role="alert">{error}</div>}
                {message && <div class="alert alert-warning" role="alert">
                    {message}
                </div>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button className="reset" disabled={loading} type="submit">
                        Reset Password
                    </Button>
                </Form>

                <div className="cred text-center log mt-3">
                    <Link to="/login">Login</Link>
                </div>

                <div className="cred text-center mt-1">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    )
}