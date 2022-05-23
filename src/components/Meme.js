import React from "react"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Meme(props) {

    // 1. create an empty array for memeArray
    const [memeArray, setMemeArray] = React.useState([])

    // 2. Create a meme object that will be used in our display
    const [memeObj, setMemeObj] = React.useState({
        topText: "top text",
        bottomText: "bottom text",
        memeUrl: "http://i.imgflip.com/1bij.jpg"
    });

    // 3. update text
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

    // 4. like submit
    function getNewMemeImage(event) {
        setMemeObj((prevMeme) => {
            // return the previous object, just change the image
            return {
                ...prevMeme,
                memeUrl: memeArray[getRandomInt(100)].url
            }
        })
    }

    // 5. Load our 100 memes array. Only run once at load
    // Only run after everything is rendered.So we cannot use this for our first load meme
    // ==> .then version
    // React.useEffect(function () {
    //     fetch("https://api.imgflip.com/get_memes") // will return a res in the next line
    //         .then(res => res.json()) // will return a json which is our data in the next line
    //         .then(data => setMemeArray(data.data.memes))
    // }, [])

    // ==> async version
    React.useEffect(() => {
        async function getMemesArr() {
            // 1. fetch response
            const res = await fetch("https://api.imgflip.com/get_memes")

            // 2. convert response as json
            const jsonResponse = await res.json()
            setMemeArray(jsonResponse.data.memes)
        }


        getMemesArr()
    }, [])

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