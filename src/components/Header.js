import React from "react"
import trollFace from "../images/troll.png"


function Header(props) {
    return (
        <nav className="nav">
            <img className="header--image" src={trollFace} alt="troll face" />
            <h1 className="header--title">Meme Generator</h1>
        </nav>
    )


}

export default Header;