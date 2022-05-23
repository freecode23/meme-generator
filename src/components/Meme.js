import React from "react"
import memesData from "../memesData.js"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Meme(props) {
    // 1. Create a meme object that will be used in our display
    const [memeObj, setMemeObj] = React.useState({
        topText: "top text",
        bottomText: "bottom text",
        memeUrl: memesData.data.memes[getRandomInt(100)].url
    });

    // 2. Get meme datas
    // const [memeDatas, setMemeDatas] = React.useState(memesData)

    function handleChange(event) {
        const { name, value } = event.target
        setMemeObj((prevMeme) => {
            // return the previous object, just change the top and bottom text
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }


    // 3. like submit
    function getNewMemeImage(event) {
        setMemeObj((prevMeme) => {
            // return the previous object, just change the image
            return {
                ...prevMeme,
                memeUrl: memesData.data.memes[getRandomInt(100)].url
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={memeObj.topText}
                    onChange={handleChange}

                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={memeObj.bottomText}
                    onChange={handleChange}
                />

                <button
                    onClick={getNewMemeImage}
                    className="form--button"
                    type="submit">
                    Get a new meme image
                </button>

                <div className="meme">
                    <img className="meme--image" src={memeObj.memeUrl} alt="" />
                    <h2 className="meme--text top">{memeObj.topText}</h2>
                    <h2 className="meme--text bottom">{memeObj.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default Meme;