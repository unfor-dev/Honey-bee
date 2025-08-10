import "../css/MeetUs.css"

function MeetUs() {
    return  <>
        <div id="meet-us" className="container section">
          <div className="about-us-header-wrapper">
            
            <div className="about-us-header">
              <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
              <h2>Meet Us</h2>
            </div>

            <hr className="about-us-header-line"/>
          </div>

          <div className="meet-us-wrapper">

            <div className="meet-us-content">
              <h2>The Art Of Beekeeping</h2>
              <p>
                We Invite You To Join Us On A Virtual Tour Of
                Our Honey Farm To See Firsthand How We
                Produce Our Premium Honey.
                Our Video Showcases The Daily Work Of Our
                Beekeepers And The Care They Give To Our
                Bees. You'll See How We Carefully Harvest The
                Honey, Ensuring That Our Bees Are Not
                Harmed And That Our Honey Is Of The Highest Quality.
              </p>
            </div>

            <img className="meet-us-video" src="./section-6-video.png" width='700' alt="Info about us" />
          </div>
        </div>
      </>
  }

export default MeetUs