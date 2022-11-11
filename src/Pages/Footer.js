import React from "react";
import Logo from "../Images/Logo.png";
import wavinghand from "../Images/wavinghand.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <div className="interact-footer-part pb-5">
        <div className="container">
        <div className="footer-part-start mt-3">
          <div className="interact-logo-wrapper mb-3">
            <div className="footer-img   ">
            <img src={Logo} width="90" height="40" className="col-sm-2 col-md-2 img" />
            </div>
          </div>
          <div className="row Footer-sub-wrapper-1">
            <div className="col-sm-4 col-md-4 footer-text-about ">
              <div className="footer-text-part">
                <div className="footer-text justify-content-center">
                  Say
                  {" "}
                  <span>
                    <img src={wavinghand} width="25" alt=""></img>
                    {" "}
                  </span>
                  at
                  {" "}
                  <a
                    href="mailto:hello@interactpro.ai" className="mail text-decoration-underline font-w-500">
                    
                    hello@interactpro.ai
                  </a>
                </div>
                <br/>
                <button
                  className="btn btn-primary  mt-2 "
                  type="submit"
                >
                  Login
                </button>
                <br/>
                
                <div className="mt-3 font-sub-text">Follow us</div>
                
                <div className="row ml-0 mr-0 icons">
                  <a href="">
                    {" "}
                    <button className="footer-social-btn ">
                      <FacebookRoundedIcon color="primary" />
                    </button>
                  </a>
                  <a href="">
                    {" "}
                    <button className="footer-social-btn ">
                      <TwitterIcon color="primary" />
                    </button>
                  </a>
                  <a href="">
                    {" "}
                    <button className="footer-social-btn ">
                      <LinkedInIcon color="primary"/>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4">
              <div className="row justify-content-end footer-items">
                <div className="col-lg-6 col-sm-6 col-md-6 mt-2  footer-items-0 ">
                  <h5 className="head font-w-600" >Company</h5>
                  <ul className="footer-nav disabled mt-4">
                    <li className="nav-item m-0">Why Interact</li><br/>
                    <li className="nav-item m-0">Product</li><br/>
                    <li className="nav-item m-0">Pricing</li><br/>
                    <li className="nav-item m-0">Blog</li><br/>
                    <li className="nav-item m-0">Partners</li><br/>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 mt-2 footer-items-0 ">
                  <h5 className="head-second font-w-600">Legal</h5>
                  <ul className="footer-nav-sec mt-4">
                  <li className="nav-item m-0">Terms & Condition</li><br/>
                  <li className="nav-item m-0">Privacy Policy</li><br/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="container">
          <p className=" text-center text-md-left footer-last">© 2022,
          <a className="font-w-700" href="Interact Technologies">Interact Technologies</a>
          .all rights reserved
          </p>
          </div>
          
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
