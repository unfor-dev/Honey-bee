import "../css/Navbar.css";
import Hero from "./Hero.jsx";

function NavBar() {
    return (
        <div className="hero">
            <div className="container">
                <nav className="navbar">
                    {/* Chap tomonda logo */}
                    <div className="navbar-logo">
                        <img src="./section-8-logo.svg" alt="Honey Logo" />
                    </div>

                    {/* O'rtadagi linklar */}
                    <ul className="navbar-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                    </ul>

                    {/* O'ng tomonda tugmalar */}
                    <div className="navbar-actions">
                        <button className="btn-music">Music</button>
                    </div>
                </nav>
                {/* Hero component */}
                <Hero />
            </div>
        </div>
    );
}

export default NavBar;
