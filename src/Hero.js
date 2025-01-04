import React from 'react'
import delivery from "./image/delivery.jpg";
import courier from "./image/courier.png";
import redirect from "./image/redirect.png";
import service from "./image/service.png";
import bringback from "./image/return.png";
import Section3 from "./image/3.jpg";
import card1 from "./image/card1.jpg";
import card2 from "./image/card2.jpg";
import card3 from "./image/card3.jpg";
// import Sec5 from "./image/Sec5.jpeg";
import Sec6 from "./image/Section6.jpg";
import Sec7 from "./image/Section7.jpg";
import Sec7a from "./image/speaker.jpg";
import Sec8 from "./image/Section8.jpg";

function Hero() {
  return (
    <div className=''>
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

        {/* -----------------business-------------------- */}
        <br/>
        <div className="business">
          <div className="business-body">
            <h1>You're a small business boss. And we're here for it.</h1>
            <p>
              Save up to 40% on select shipping and surcharges when you open a
              free account.
            </p>
            <a href="#">Start Saving</a>
          </div>

          <div className="business-image">
            <img src={delivery} alt=''/>
          </div>
        </div>

        {/*-------------------- Section 2 -----------------*/}
        <div className="Section2">
          <h1>Manage your shipments and returns</h1>
          <div className="icon">
            <div className="courier">
              <img src={courier} alt=''/>
              <p>Drop off a package</p>
            </div>
            <div className="redirect">
              <img src={redirect} alt=''/>
              <p>Redirect a package</p>
            </div>
            {/* <div>
            <img src={store} />
          </div> */}
            <div className="Service">
              <img src={service} alt=''/>
              <p>Service Alert</p>
            </div>
            <div className="return">
              <img src={bringback} alt=''/>
              <p>Return a package</p>
            </div>
          </div>
        </div>

        {/* ------------------------ Section 3 ------------------------ */}
        <div id="Section3">
          <h1>Take steps toward more sustainable shipping</h1>
        </div>
        <div className="Section3">
          <div className="Section-body">
            <h1>Celebrate Earth Day 24/7</h1>
            <p>
              April 22 is Earth Day, but prioritizing the planet never stops.
              <br></br> Learn how we’re innovating and investing to deliver{" "}
              <br></br> change—and to support your efforts.
            </p>
            <a href="#">Explore our Initiatives</a>
          </div>

          <div className="Section3-image">
            <img src={Section3} alt=''/>
          </div>
        </div>

        {/* -----------------------------------Section 4 ------------------------- */}
        <div className="Section4">
          <div class="card">
            <img src={card1} alt=''/>
            <div class="container">
              <h1>
                Wrap up your orders <br></br> responsibly
              </h1>
              <p>
                Packing more efficiently can reduce waste and shipping costs.
                Learn more about sustainable packaging options. And get tips on
                how to minimize packaging while protecting your products.
              </p>
              <br></br>
              <br></br>
              <a href="#">Sustainable Solutions</a>
            </div>
          </div>
          {/*  */}
          <div class="card">
            <img src={card2} alt=''/>
            <div class="container">
              <h1>See how conservation grows</h1>
              <br/>
              <p>
                FedEx team members are passionate about protecting the
                environment. They plant trees in areas that critically need
                them. Learn how we're going global with Picture Proof of
                Planting.
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <a href="#">Follow the Projects</a>
            </div>
          </div>
          {/*  */}
          <div class="card">
            <img src={card3} alt=''/>
            <div class="container">
              <h1>Master your sustainability strategy</h1>
              <p>
                See what FedEx can do for your business. Like supporting your
                sustainability journey with insights from experts and peers. Get
                tips on marketing, giving back, and more.
              </p>
              <br/>
              <br/>
              <br/>
              <a href="#">Find business guidelines</a>
            </div>
          </div>
        </div>

        {/* ------------------------ Section 6 ------------------------ */}
        <div id="Section3">
          {/* <h1>Take steps toward more sustainable shipping</h1> */}
        </div>
        <div className="Section3">
          <div className="Section-body">
            <h1>See the search for burning love</h1>
            <p>
              A customer shipped the negatives of an Elvis film but forgot{" "}
              <br/> the temperature-controlled packaging. Luckily, our trace{" "}
              <br/> agents Lisa and Wanda stayed cool. Got your own delivery{" "}
              <br/> story? Share it on social with #FedExceptional.
            </p>
            <a href="#">Watch True Tales</a>
          </div>

          <div className="Section3-image">
            <img src={Sec6} alt=''/>
          </div>
        </div>

        {/* ------------------------ Section 5 ---------------------------- */}
        {/* <div className="Section5">
          <div class="card-container">
            <div class="card5">
              <img src={Sec5} />
              <div class="card-info">
                <h3 class="card-title">Watch truly cinematic deliveries</h3>
                <br></br>
                <p class="card-description">
                  An unlikely ring bearer. A search for burning love. A modern
                  skateboarding miracle. They’re not movies, they’re our true
                  delivery stories. Did a team member go the extra mile for you?
                  Tell us on social with #FedExceptional.
                </p>
                
                <br></br>
                <a href="">Check out the stories &rarr;</a>
              </div>
            </div>
          </div>
        </div> */}

        {/* ------------------------ Section 7 ----------------------------- */}
        <div className="Section7">
          <h1>Put flexible shipping at your fingertips</h1>
          <img src={Sec7} alt=''/>
          <div className="icon">
            <div className="speaker">
              <img src={Sec7a} alt=''/>
              <p>
                Enable proactive notifications, including <br></br> a virtual
                doorbell chime
              </p>
            </div>
            <div className="bus">
              <img src={redirect} alt=''/>
              <p>
                Easily set a preferred pickup location on <br></br> the updated
                home screen
              </p>
            </div>
            <div className="Service-icon">
              <img src={service} alt=''/>
              <p>
                Get alerts on your Apple Watch and ask <br></br> Siri to track
                your package
              </p>
            </div>
          </div>

          <div className="bottom-text">
            <p>
              And, sign up for
              <span className="underline"> FedEx Delivery Manager®</span> through
              the mobile app to <br></br>
              customize deliveries from your phone.
            </p>
            <br/>
            <br/>
            <a href="">Download the app</a>
          </div>
        </div>

        {/* ---------------------------Section 8 ----------------------- */}
        <div id="Section8">
          {/* <h1>Take steps toward more sustainable shipping</h1> */}
        </div>
        <div className="Section8">
          <div className="Section8-image">
            <img src={Sec8} alt=''/>
          </div>

          <div className="Section8-body">
            <h1>Pick up and drop off packages near you</h1>
            <p>
              With so many retail locations to choose from, convenience is never{" "}
              <br></br>
              far away. Pick up and drop off shipments at FedEx Office,{" "}
              <br></br>
              Walgreens, Dollar General, grocery stores, and other locations.
            </p>
            <a href="#">Find Nearby Options</a>
          </div>
        </div>

        <div className="FedEx">
          <h1>FedEx money-back guarantee</h1>
          <p>
            We offer a money-back guarantee for select services. This guarantee
            may be suspended, modified, or revoked. Please check money-back{" "}
            <br></br> guarantee for the latest status of our money-back
            guarantee.
          </p>
        </div>


    </div>
  )
}

export default Hero