import "../css/Footer.css"

function Footer() {
    return  <>
      <div className="footer-container">
        <div className="container">
          <div className="footer-wrapper">
          <div className="footer-info-wrapper">

            <div className="footer-nav-wrapper">
              <ul>
                <p><strong>About </strong></p>
                <li><a href="#Products">Products</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#FAQ">FAQ</a></li>
              </ul>
              <ul>
                <p><strong>Services </strong></p>
                <li><a href="#TermsofService">Terms of Service</a></li>
                <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
                <li><a href="#Store">Store</a></li>
              </ul>
              <ul>
                <p><strong>Help Center </strong></p>
                <li><a href="#Return">Return</a></li>
                <li><a href="#Purches">Purches</a></li>
              </ul>
              <ul>
                <p><strong>Contact Us </strong></p>
                <li><a href="#Email">Email</a></li>
                <li><a href="#Phone">Phone</a></li>
                <li><a href="#Address">Address</a></li>
              </ul>
            </div>

            <div className="footer-socials-wrapper">
              <img src="./section-8-instagram.svg" width='50' alt="Instagram Logo" />
              <img src="./section-8-linkedin.svg" width='50' alt="Linkedin Logo" />
              <img src="./section-8-youtube.svg" width='50' alt="YouTube Logo" />
            </div>

            <img src="./section-8-logo.svg" width='250' alt="Site Logo" />
          </div>

          <img src="./section-8-1.svg" width='250' alt="Bee Jam" />
        </div>
        </div>
      </div>
      </>
  }

export default Footer