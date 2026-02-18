import { useCallback } from "react";
import "../css/Footer.css";

function Footer() {
    const scrollToSection = useCallback((e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div id="footer" className="footer-container section">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-info-wrapper">
                        <div className="footer-nav-wrapper">
                            <ul>
                                <p><strong>About</strong></p>
                                <li><a href="#products" onClick={(e) => scrollToSection(e, "products")}>Products</a></li>
                                <li><a href="#about-us" onClick={(e) => scrollToSection(e, "about-us")}>About Us</a></li>
                                <li><a href="#gallery" onClick={(e) => scrollToSection(e, "gallery")}>Gallery</a></li>
                            </ul>
                            <ul>
                                <p><strong>Services</strong></p>
                                <li><a href="#shop" onClick={(e) => scrollToSection(e, "shop")}>Shop</a></li>
                                <li><a href="#products" onClick={(e) => scrollToSection(e, "products")}>Products</a></li>
                                <li><a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>Home</a></li>
                            </ul>
                            <ul>
                                <p><strong>Help Center</strong></p>
                                <li><a href="#shop" onClick={(e) => scrollToSection(e, "shop")}>Shop</a></li>
                                <li><a href="#meet-us" onClick={(e) => scrollToSection(e, "meet-us")}>Meet Us</a></li>
                            </ul>
                            <ul>
                                <p><strong>Contact Us</strong></p>
                                <li><a href="#meet-us" onClick={(e) => scrollToSection(e, "meet-us")}>Meet Us</a></li>
                                <li><a href="#footer" onClick={(e) => scrollToSection(e, "footer")}>Footer</a></li>
                            </ul>
                        </div>

                        <div className="footer-socials-wrapper">
                            <img src="./section-8-instagram.svg" width="50" alt="Instagram Logo" />
                            <img src="./section-8-linkedin.svg" width="50" alt="Linkedin Logo" />
                            <img src="./section-8-youtube.svg" width="50" alt="YouTube Logo" />
                        </div>

                        <img className="footer-logo" src="./section-8-logo.svg" width="250" alt="Site Logo" />
                    </div>

                    <img className="footer-image" src="./section-8-1.svg" width="250" alt="Bee Jam" />
                </div>
            </div>
        </div>
    );
}

export default Footer;