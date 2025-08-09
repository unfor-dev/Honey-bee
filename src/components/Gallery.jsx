import "../css/Gallery.css"

function Gallery() {
    return  <>
        <div className="gallery-container">
          <div className="container">
            <div className="about-us-header-wrapper">
              
              <div className="about-us-header">
                <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
                <h2>Gallery</h2>
              </div>

                <hr className="about-us-header-line"/>
              </div>

              <div className="gallery-images-wrapper">
                <img className="gallery-image" src="./section-4-1.png" width='300' height='330' alt="Gallery Image 1" />
                <img className="gallery-image" src="./section-4-2.png" width='400'  alt="Gallery Image 2" />
                <img className="gallery-image" src="./section-4-3.png" width='300' height='330' alt="Gallery Image 3" />
                <img className="gallery-image" src="./section-4-4.png" width='400' alt="Gallery Image 4" />
                <img className="gallery-image" src="./section-4-5.png" width='400' alt="Gallery Image 5" />
              </div>
            </div>
        </div>
      </>
  }

export default Gallery;