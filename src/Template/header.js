export default function Header()
{
    return (<div>
         <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="images/main-logo.png" className="logo"></img>
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
             
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="images/main-logo.png" className="logo" ></img>
              </a>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="#billboard">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">Payment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#mobile-products">View Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#smart-watches">Orders</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">Crypto Tracker</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Login</a>
                  
                  
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <a href="#" className="search-button">
                          <svg className="search">
                            
                          </svg>
                        </a>
                      </li>
                      <li className="pe-3">
                        <a href="#">
                          <svg className="user">
                            
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <svg className="cart">
                            
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </div>)
}