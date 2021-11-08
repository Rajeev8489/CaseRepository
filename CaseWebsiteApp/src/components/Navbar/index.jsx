import './Header.css';
import React, { useState } from 'react';




export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <>

            <div className="Navbar">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">Home</a>

                    <a href="/Forms">Claim Form</a>

                    <a href="/Contact">Contact</a>

                </div>
                <button className="fas fa-bars" onClick={() => setShowLinks(!showLinks)}>
                    {/* <span className="fas fa-bars"></span> */}
                </button>
            </div>
        </>
    )
}
