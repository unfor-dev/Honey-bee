import "../css/AboutUs.css"

function AboutUs() {
    return  <>
        <div className="container">
          <div className="about-us-header-wrapper">
            
            <div className="about-us-header">
              <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
              <h2>About Us</h2>
            </div>

            <hr className="about-us-header-line"/>
          </div>

          <div className="about-us-wrapper">
              <div className="about-us-content">
                <p> At Golden Hive Honey, We Are Passionate About
                    Providing Our Customers With The Finest Quality Honey
                    Products Straight From Our Beekeeping Farms. Our
                    Journey Began Years Ago When Our Founders, A Group...
                </p>
                <button className="about-us-button">More</button>
              </div>
              <div className="about-us-images">
                  <img className="about-us-image" src="./section-1-2.svg" width='800' height='800' alt="Honey Jam" />
                  <img className="about-us-image-absolute" src="./section-1-3.svg" width='600' height='600' alt="Honey Jam" />
              </div>
              </div>
          </div>
      </>
  }

export default AboutUs