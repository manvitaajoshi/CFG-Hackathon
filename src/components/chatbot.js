import React, { useState } from 'react';
import mystyle from "../css/dashboard.css"

export default function Chatbot() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="btn btn-danger" style={{
                position: "absolute",
                top: "90%",
                left: "90%"
            }} onClick={() => {
                setShow(!show)
            }}>
                <i class="fas fa-question"></i>
                Support
            </button>

            {
                show === true ?
                    <iframe class="chatbot" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/78e40d1f-42b7-478c-8760-8db48489301c"></iframe>
                    : ""
            }
        </>


    );
}