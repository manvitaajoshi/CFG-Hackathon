import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"

export default function UserProfile({user}) {

    const deleteUser = () => {
        const useRef = firebase.database().ref("user-prof").child(user.id);
        useRef.remove();
    }

    const updateUser = () => {
        const useRef = firebase.database().ref("user-prof").child(user.id);
        useRef.update({
            status: !user.status
        });
    }
    const [pdfUrl, setPdfUrl] = useState([]);

   

    return (
        <div>
            <h1>{user.fname}</h1>
            <button onClick={deleteUser}>delete</button>
            <button onClick={updateUser}>update</button>
           
        </div>
    )
}
