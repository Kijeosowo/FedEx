import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavRespon = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "10vh" }}>
      <nav>
        <div className="logo ml-[5%] mt-3">
          <h1 className="text-3xl font-bold text-white">
            Fed<span className="text-orange-500">Ex</span>
          </h1>
        </div>

        <div className="nav-links mt-1 ml-[-20%] flex gap-[10px]">
          <div class="dropdown">
            <button class="dropbtn">
              Shipping <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div class="dropdown-content ml-[-7%] w-[20%]">
              <a href="#">Create a Shipment</a>
              <a href="#">Shipping Rates & Delivery Times</a>
              <a href="#">Schedule & Manage Pickups</a>
              <a href="#">Packing & Shipping Supplies</a>
              <a href="#">International Shipping Guide</a>
              <a href="#">Freight</a>
              <a href="#">Manage a Return</a>
              <a href="#">All Shipping Services</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Tracking <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div class="dropdown-content ml-[0%] w-[10%]">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Design & Print <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div class="dropdown-content ml-[0%] w-[20%]">
              <a href="#">Small Business Center</a>
              <a href="#">FedEx Service Guide</a>
              <a href="#">Account Management Tools</a>
              <a href="#">Frequently Asked Questions</a>
              <a href="#">File Claim</a>
              <a href="#">Billing & Invoicing</a>
              <a href="#">Customer Support</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Location <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div class="dropdown-content ml-[0%] w-[20%]">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Support <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Signup or Login</button>
            <FontAwesomeIcon icon={faUser} className="text-[18px]" />
          </div>

          <div className="mt-3 ml-5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[18px]" />
          </div>
        </div>

        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="nav-res-menu flex flex-col gap-[5px] ml-[10%] mt-[15%] font-bold text-[25px]">
          <a href="#" className="bg-purple-900">
            Search for Tracking Numbers <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <a href="">
            Shipping <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <a href="">
            Tracking <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <a href="">
            Design & Print <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <a href="">
            Locations <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <a href="">
            Support <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavRespon;
