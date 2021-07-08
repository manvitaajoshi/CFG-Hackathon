import React, { useState } from 'react'
import "firebase/auth"
import firebase from 'firebase';
import ScriptTag from 'react-script-tag';
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid";

export default function CRUD() {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const {currentUser} = useAuth()


    const handleFNameOnChange = (e) => {
        setFname(e.target.value);
    };
    const handleLNameOnChange = (e) =>{
        setLname(e.target.value);
    }
    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    }
    const handlePhoneOnChange = (e) => {
        setPhone(e.target.value);
    }
    console.log(currentUser.email);
    const createUser = () => {
        const userRef = firebase.database().ref("user-prof")
        const user = {
            fname,
            lname,
            password,
            email: currentUser.email,
            phone,
            status: false,
        };
    };

   

    return (
        <div>
            <input type="text" onChange={handleFNameOnChange} value={fname} placeholder="First name" /><br /><br />
            <input type="text" onChange={handleLNameOnChange} value={lname} placeholder="Last name" /><br /><br />
            <input type="password" onChange={handlePasswordOnChange} value={password} placeholder="Password" /><br /><br />
            {/* <input type="email" onChange={handleEmailOnChange} value={email} placeholder={currentUser.email} /><br /><br /> */}
            <input type="phone" onChange={handlePhoneOnChange} value={phone} placeholder="Phone" /><br /><br />
            {currentUser.email}
           
            <button onClick={createUser}><Link to="/crud2">Add User</Link></button>
        </div>
    )
}
