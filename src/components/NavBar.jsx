import { useState, useRef, useCallback } from "react";
import "../css/Navbar.css";
import Hero from "./Hero.jsx";

function NavBar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying((prev) => !prev);
    }, [isPlaying]);

    const scrollToSection = useCallback((e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div className="hero">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src="./section-8-logo.svg" alt="Honey Logo" />
                    </div>

                    <ul className="navbar-links">
                        <li><a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>Home</a></li>
                        <li><a href="#about-us" onClick={(e) => scrollToSection(e, "about-us")}>About Us</a></li>
                        <li><a href="#products" onClick={(e) => scrollToSection(e, "products")}>Products</a></li>
                        <li><a href="#meet-us" onClick={(e) => scrollToSection(e, "meet-us")}>Contact</a></li>
                        <li><a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")}>Gallery</a></li>
                    </ul>

                    <div className="navbar-actions">
                        <button onClick={toggleMusic} className="btn-music">
                            {isPlaying ? "Pause" : "Sound"}
                        </button>
                        <audio ref={audioRef} src="/sound/sound.mp3" loop />
                    </div>
                </nav>

                <Hero />
            </div>
        </div>
    );
}

export default NavBar;
