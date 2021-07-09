import React from "react" ; 
import "../css/dashboard.css"

export default function Footer(){
    return (  <footer>

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
    </footer>)
}