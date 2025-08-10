import "../css/Products.css"

function Products() {
    return  <>
        <div id="products" className="container section">
          <div className="about-us-header-wrapper">
            
            <div className="about-us-header">
              <img src="./section-1-bee.svg" width='130' height='130' alt="Bee" />
              <h2>Products</h2>
            </div>

              <hr className="about-us-header-line"/>
            </div>

            <div className="products-wrapper">
                <img className="products-image" src="./section-2-1.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-2.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-3.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-4.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-5.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-6.svg" width='200' height='200' alt="Products" />
                <img className="products-image" src="./section-2-7.svg" width='200' height='200' alt="Products" />
            </div>
          </div>
      </>
  }

export default Products