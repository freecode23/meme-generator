import React from "react"
import trollFace from "../images/troll.png"


function Header(props) {
    return (
        <nav className="header">
            <img className="header--image" src={trollFace} alt="troll face" />
            <h2 className="header--title">Meme Generator</h2>
        </nav>
    )


}

export default Header;