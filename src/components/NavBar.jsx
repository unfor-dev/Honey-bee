import { useState, useRef } from "react";
import "../css/Navbar.css";
import Hero from "./Hero.jsx";

function NavBar() {
    // State to track whether the music is playing or not
    const [isPlaying, setIsPlaying] = useState(false);

    // Reference to the audio element
    const audioRef = useRef(null);

    // Function to toggle music playback
    const toggleMusic = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="hero">
            <div className="container">
                <nav className="navbar">
                    {/* Logo section (left) */}
                    <div className="navbar-logo">
                        <img src="./section-8-logo.svg" alt="Honey Logo" />
                    </div>

                    {/* Navigation links (center) */}
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>

                    {/* Action buttons (right) */}
                    <div className="navbar-actions">
                        {/* Music toggle button */}
                        <button 
                            onClick={toggleMusic} 
                            className="btn-music ctaButton"
                        >
                            {isPlaying ? "Pause" : "Sound"}
                        </button>

                        {/* Background music */}
                        <audio 
                            ref={audioRef} 
                            src="../sound/sound.mp3" 
                            loop
                        ></audio>
                    </div>
                </nav>

                {/* Hero section */}
                <Hero />
            </div>
        </div>
    );
}

export default NavBar;
