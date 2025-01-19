import React from 'react'
//------------------- Icons
import email from "./image/Icons/email.png";
import facbook from "./image/Icons/facebook.png";
import x from "./image/Icons/xicon.png";
import instagram from "./image/Icons/instagram.png";
import linkedin from "./image/Icons/linkedin.png";
import youtube from "./image/Icons/youtube.png";
import Pinterest from "./image/Icons/pinterest.png";

function Footer() {
  return (
    <div>
        <div className="Footer">
          <footer>
            <div>
              <h1>Our Company</h1>
              <br/>
              <ul><li><a href="#">About FedEx</a></li></ul>
              <ul><li><a href="#">Our Portfolio</a></li></ul>
              <ul><li><a href="#">Investor Relations</a></li></ul>
              <ul><li><a href="#">Careers</a></li></ul>
            </div>

            <div>
              <ul><li><a href="#">FedEx Blog</a></li></ul>
              <ul><li><a href="#">Corporate Responsibility</a></li></ul>
              <ul><li><a href="#">Newsroom</a></li></ul>
              <ul><li><a href="#">Contact Us</a></li></ul>
            </div>

            <div className='morefromfedex'>
              <h1>More from FedEx</h1>
              <br/>
              <ul><li><a href="#">FedEx Compatible</a></li></ul>
              <ul><li><a href="#">FedEx Developer Portal</a></li></ul>
              <ul><li><a href="#">FedEx Logistics</a></li></ul>
              <ul><li><a href="#">ShopRunner</a></li></ul>
            </div>

            <div className='language'>
              <h1>Language</h1>
              <br/>
              <ul><li><a href="#">United States</a></li></ul>
            </div>

          </footer>
          <hr className="hr" />

          <div className="Footer-bottom">
            <div>
              <p>© FedEx 1995-2024</p>
            </div>
            <div className="Footer-bottom-links">
              <a href="#">Site Map</a>
              <hr/>
              <a href="#">Terms of Use</a>
              <hr/>
              <a href="#">Privacy & Security</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer