import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
import UserProfile from './UserProfile';

export default function CRUD2() {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>

    const [userList, setUserList] = useState();
    const { currentUser } = useAuth()
    useEffect( () => {
        const userRef = firebase.database().ref("user-prof");
        userRef.on('value', (snapshot) =>{
            const users = snapshot.val();
            const userList = [];
            for(let id in users){
                console.log(users[id].email);
                 if(currentUser.email === (users[id].email)){
                    userList.push({id, ...users[id]})
                 }
            }
            setUserList(userList);
        });
    }, []);
    return (
        <div>
            {userList ? userList.map((user, index) => <UserProfile user={user} key={index}/>) : ''}
            <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/78e40d1f-42b7-478c-8760-8db48489301c"></iframe>
        </div>
    )
}
