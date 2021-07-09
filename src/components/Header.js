import React, { useState } from 'react';
import '../css/dashboard.css'
import { auth } from '../firebase';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"




export default function Header(props) {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
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
        <div className="page-navbar">

            <h1 className="text-box heading-primary">
                <span className="heading-primary-main">NGO NAME</span>
                <br />
                <span className="heading-primary-sub">SLOGAN</span>
            </h1>

            <div className="nav-items highlightTextOut">
                {/* <button><Link to="/home">Home</Link></button> */}
                {props.authbtn === "register" ?
                    <>
                        <a id="register" alt="REGISTER"><Link to="/signup">REGISTER</Link></a>
                        <a id="login" alt="LOGIN"><Link to="/login">LOGIN</Link></a> </> : <><a alt="LogOut"><button className="btn btn-danger" onClick={() => { handleLogout() }}>
                            Log Out <span><i class="fas fa-sign-out-alt"></i></span>
                        </button></a></>
                }
            </div>
        </div>



    );
}