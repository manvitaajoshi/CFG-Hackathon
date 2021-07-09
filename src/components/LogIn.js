import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory, Redirect } from "react-router-dom"
import "../css/signup.css"

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
            history.push("/home")
        }
        catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <>
            <div className="login"></div>

            <form class="box" onSubmit={handleSubmit}>
                <h1>LOGIN</h1><br />
                {error && <Alert variant="danger">{error}</Alert>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
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