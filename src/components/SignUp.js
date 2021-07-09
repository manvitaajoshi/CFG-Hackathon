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

            <div className="register">
            </div>
            <form class="box" onSubmit={handleSubmit}>
                <h1>REGISTER</h1><br />
                {error && <Alert variant="danger">{error}</Alert>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
                <input type="password" name="" placeholder="Confirm Password" ref={passwordConfirmRef} required />

                <br /><input type="submit" name="" disabled={loading} value="Signup" /><br />
            </form>


            <div className="btn">
                <span className="acc">Already have an account?</span> <Link to="/login" style={{ color: "blue" }}>LOG IN</Link>
            </div>

        </>
    )
}