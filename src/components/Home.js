import React, { useState } from 'react';
import Chatbot from './chatbot';
import { auth } from "../firebase"
import { Link, useHistory } from "react-router-dom"



export default function Home() {

    const [error, setError] = useState("")
    const history = useHistory();
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
            <div className="dashboard-page">

                <div className="nav-items highlightTextOut">
                    <a alt="LogOut"><button onClick={() => { handleLogout() }}>
                        Log Out
                    </button></a>
                </div>

                <div className="text-box">
                    <h1>Carousel will appear here</h1>
                </div>




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