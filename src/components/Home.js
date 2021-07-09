import React, { useState } from 'react';
import Chatbot from './chatbot';
import Footer from './Footer';
import Content from './Content';
import { auth } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import Header from './Header';


export default function Home() {




    return (
        <>
            <div className="dashboard-page">

                <Header authbtn={"logout"} />


                <Content />
                <Footer />

            </div>
            <Chatbot />
        </>
    )
}