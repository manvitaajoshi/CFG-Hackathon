
import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"
import '../css/dashboard.css';
import ScriptTag from 'react-script-tag';



export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    function handleLogout() {
        setError("")

        try {
            auth.signOut()
            history.push("/login")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <ScriptTag isHydrating={true} type="text/javascript" src="../javascript/dashboard-js.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/ab6caf2d21.js" crossorigin="anonymous"/>

            {/* <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div> */}
            <div className="navbar">
                <div className="container highlightTextOut">
                    <img className="ir" src="logo.jpg" alt="logo"/>
                    <div className="pos">
                        <a alt="HOME">HOME</a>
                        <a alt="REGISTER"><Link to="/signup">REGISTER</Link></a>
                        <a alt="LOGIN"><Link to="/login">LOGIN</Link></a>
                        <a alt="HELP">HELP</a>
                    </div>
                </div>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">NGO NAME</span>
                    <br />
                    <span className="heading-primary-sub">SLOGAN</span>
                </h1>
            </div>
            <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/78e40d1f-42b7-478c-8760-8db48489301c"></iframe>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
            {/* <FontAwesomeIcon icon={['fab', ' fa-instagram']} /> */}
            <footer>
                <br /><br /><br /><br />
                &copy; Copyright XYZ<br />
                All rights reserved.<br /><br />
                {/* <a
                    href="https://www.google.co.in/maps/place/Sardar+Patel+Institute+of+Technology+(SPIT),+Bharatiya+Vidya+Bhavan/@19.1232302,72.8360145,20z/data=!4m5!3m4!1s0x0:0x16268e5d6bca2e6a!8m2!3d19.1231776!4d72.8361154?hl=en"
                    target="_blank" class="contain">
                    Sardar Patel Institute of Technology,<br />
                    Bhavan's Campus, Munshi Nagar,<br />
                    Andheri West, Mumbai - 400 058</a
                ><br /><br />
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ir@spit.ac.in"
                    target="_blank" class="contain"
                ><i class="fa fa-envelope-o" aria-hidden="true"></i
                >&nbsp;ir@spit.ac.in</a
                ><br /><br /> */}
                <div >
                    Follow us on<br />
                    <ul className="icons">
                        {/* <FontAwesomeIcon icon={['fab', ' fa-instagram']} /> */}
                        <a><i className="fab fa-linkedin-in"></i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a><i className="fab fa-instagram"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                        <a><i className="fab fa-facebook-f"></i></a>
                    </ul>
                </div>
            </footer>
        </>
    )
}