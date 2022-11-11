import React from 'react'
import Logo from '../Images/Logo.png';
import EastSharpIcon from '@mui/icons-material/EastSharp';

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="interact-navbar">
                <div className="container">
                    <div className="interact-navbar-start">

                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand" href="#">
                    <img src={Logo} width="90" height="40" class="d-inline-block align-top" alt=""/>
                    
                  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Why Interact </a>
      </li>
      
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Product
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="#">Pricing</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="#">Blog</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link " href="#">Partners</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 ml-auto">
    <button className="btn btn-primary mr-sm-2 m-2 font-w-600 font-s-14px" type="submit">Login</button>
      <button className="btn btn-outline-primary my-2 my-sm-2" type="submit">Get Started
      {" "}
      <EastSharpIcon/>
      </button>
    </form>
  </div>
</nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar