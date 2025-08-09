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

            <div className="shop-products-wrapper">
                <div className="shop-product-wrapper">

                    <div className="shop-product-img-wrapper">
                        <img className="shop-product-image" src="./section-3-1.svg" width='350' height='350' alt="Honey Jam" />
                        <h2 className="shop-product-image-title">Fireweed Blossom Honey</h2>
                    </div>

                    <div className="shop-product-info-wrapper">
                      <p>
                        <strong>Flavor : </strong>Fireweed honey has a delicate, sweet flavor with subtle floral notes. It has a smooth and creamy texture that melts in your mouth.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .
                      </p>
                      <p>
                        <strong>Health Benefits : </strong>Fireweed honey is rich in antioxidants, vitamins, and minerals. It has antibacterial and anti-inflammatory properties, making it a natural remedy for sore throats, coughs, and colds.Lorem ipsum dolor sit amet.
                      </p>

                      <div className="shop-product-price-wrapper">

                        <div className="shop-product-size-wrapper">
                          <h3>Size :</h3>
                          <img className="shop-product-size-image" src="./section-3-2.svg" width='150' height='100' alt="Size" />
                        </div>

                        <div className="shop-product-price">
                          <p><strong>Color : </strong>Amber</p>
                          <p><strong>Region : </strong>Forest areas of India</p>
                          <p><strong>Price : </strong>$200</p>
                        </div>

                        <button className="shop-product-button">Add to Cart</button>

                      </div>
                    </div>

                </div>
            </div>
          </div>
      </>
  }

export default Shop