
import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"
import Chatbot from "./chatbot"
import Home from "./Home"
import '../css/dashboard.css';
import ScriptTag from 'react-script-tag';



export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();







    return (
        <>
            <ScriptTag isHydrating={true} type="text/javascript" src="../javascript/dashboard-js.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/ab6caf2d21.js" crossorigin="anonymous" />

            <div className="dashboard-page">

                <div className="nav-items highlightTextOut">
                    <a alt="REGISTER"><Link to="/signup">REGISTER</Link></a>
                    <a alt="LOGIN"><Link to="/login">LOGIN</Link></a>
                </div>

                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">NGO NAME</span>
                        <br />
                        <span className="heading-primary-sub">SLOGAN</span>
                    </h1>
                </div>


                {/* <div className="log-out">
                    <button onClick={() => { handleLogout() }}>
                        Log Out
                    </button>
                </div> */}

                <footer>

                    Follow us on
                    <ul className="icons">

                        <a><i className="fab fa-linkedin-in"></i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a><i className="fab fa-instagram"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                        <a><i className="fab fa-facebook-f"></i></a>
                    </ul>
                    <div className="copyright">
                        &copy; Copyright XYZ
                        All rights reserved.
                    </div>
                </footer>

            </div>
            <Chatbot />
        </>
    )
}
