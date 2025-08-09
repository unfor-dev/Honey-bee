import "../css/Shop.css"

function Shop() {
    return  <>
        <div className="container">
          <div className="about-us-header-wrapper">
            
            <div className="about-us-header">
              <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
              <h2>Shop</h2>
            </div>

              <hr className="about-us-header-line"/>
            </div>

            <div className="products-wrapper">
                <img className="products-image" src="./section-2-7.svg" width='200' height='200' alt="Products" />
            </div>
          </div>
      </>
  }

export default Shop