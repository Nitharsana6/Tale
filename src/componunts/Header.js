import React from "react";
import '../componunts/assets/css/animate.css';
import "../componunts/assets/css/flex-slider.css";
import '../componunts/assets/css/fontawesome.css';
import '../componunts/assets/css/owl.css';
import '../componunts/assets/css/templatemo-tale-seo-agency.css';
import logo from '../componunts/assets/images/logo.png';



function Header(){
    return(
        <>
<div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>



  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    
                    <a href="index.html" className="logo">
                        <img src={logo} alt="" style={{maxWidth:"112px"}}/>
                         <img/>   
                    </a>
                    {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --/> */}
                    <ul className="nav">
                      <li><a href="/">Home</a></li>
                      <li><a href="/service">Services</a></li>
                      <li><a href="index.html">Projects</a></li>
                      <li className="has-sub">
                          <a href="javascript:void(0)">Pages</a>
                          <ul className="sub-menu">
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="faqs.html">FAQs</a></li>
                          </ul>
                      </li>
                      <li><a href="index.html">Infos</a></li>
                      <li><a href="index.html">Contact</a></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span> </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}

  
        </>
    )
}
export default Header;