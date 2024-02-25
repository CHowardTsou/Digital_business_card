import React from 'react'

export default function Main(){
    return (
        <main>
            <img src="./OIG.png" alt="my personal image" className="myphoto" />
            <h1>Pikachu</h1>
            <h3>Frontend Developer</h3>
            <p className="site">pikachu.website</p>
            <div className="btn">
                <button className="btn-email"><i className="fa-solid fa-envelope"></i>   Email</button>
                <button className="btn-linkedin"><i className="fa-brands fa-linkedin"></i>   LinkedIn</button>
            </div>
            <div className="intro">
                <h2>About</h2>
                <p className="des">I am a frontend developer</p>
                
                <h2>Interest</h2>
                <p className="des">workout, coding, music</p>
            </div>
        </main>
    )
}