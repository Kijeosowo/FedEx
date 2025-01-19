import React from "react";

function Home() {
  return (
    <div className="Header">
      <nav className="Navbar">
        <div className="logo">
          <h1>
            Fed<span>Ex</span>
          </h1>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Tools</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Revenue</a>
            </li>
            <li>
              <a href="">Billables</a>
            </li>
          </ul>
        </div>

        <div className="Register">
          <a href="">Signup or Login</a>
        </div>
      </nav>

      <div className="hero">
        <p className="discount">50% discount on all fees.</p>
        <h1 className="ship">We Ship, manage,</h1>
        <h1 className="track">track & deliver.</h1>
      </div>

      <div className="tracking">
        <input placeholder="TRACKING ID" />
        <button>TRACK</button>
      </div>

      <div className="features">
        <div className="rateship">
          <p>Rate & Ship</p>
        </div>
        <div className="trackship">
          <p>Track</p>
        </div>
        <div className="location">
          <p>Location</p>
        </div>
      </div>

      <div className="business">
        <div className="business-body">
          <h1>
            You're a small business <br /> boss. And we're here for it.
          </h1>
          <p>
            Save up to 40% on select shipping and <br /> surcharges when you
            open a free account.
          </p>
          <a href="#">Start Saving</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
