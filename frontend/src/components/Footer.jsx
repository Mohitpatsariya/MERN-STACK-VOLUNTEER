import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram,FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
        <ul>
          <li>INDIA, PUNE</li>
          <li>crypto@gmail.com</li>
          <li>+91-8821885134</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate us</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>   
      <h4>Follow us</h4>  
        <ul>
          <li>
            <Link to={"/"}>
              <span><FaSquareInstagram/></span>
              <span>Instagram</span>{}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span><FaSquareXTwitter/></span>
              <span>Twitter</span>{}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span><FaSquareWhatsapp/></span>
              <span>Whatsapp</span>{}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span></span>
              <span></span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span></span>
              <span></span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
