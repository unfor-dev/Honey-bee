import "../css/Beauty.css"

function Beauty() {
    return  <>
        <div className="container">
          <div className="about-us-header-wrapper">
            
            <div className="about-us-header">
              <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
              <h2>Beauty</h2>
            </div>

            <hr className="about-us-header-line"/>
          </div>

          <div className="beauty-wrapper">
              <div className="beauty-content">
                <p> Honey Is Not Only A Delicious Treat, But It Also Has
                    Many Benefits For Your Skin. At Our Honey Online Shop,
                    We Offer A Wide Range Of Beauty Products Made From
                    Honey To Help You Achieve Healthy, Radiant Skin.
                </p>
                <button className="about-us-button">More</button>
              </div>
              <div className="beauty-images">
                  <img className="beauty-image" src="./section-5-1.svg" width='800' height='800' alt="Honey Jam" />
              </div>
              </div>
          </div>
      </>
  }

export default Beauty