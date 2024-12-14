import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="one">
        <div className="one-1">
          <h1>
            Best Service with <br />
            <span>Affordable Price </span>in Coimbatore
          </h1>
          <button>Book Now</button>
        </div>

        <div className="one-2">
          <img src="../../src/assets/banner1.jpg" alt="Banner" />
        </div>
      </section>

      <section className="two">
        <div className="two-1">
          <h1>Ongoing Offers</h1>
        </div>

        <div className="two-2">
          <div className="two-2-1">
            <h2>General Service<span className="two-2-1span"><del>₹1500</del></span><span className="two-2-2span">₹1299</span></h2>
            <div className="two-2-1-1">
              <div className="two-2-1-1-1">
                <p>FREE</p>
              </div>
              <div className="two-2-1-2-2">
                <p><i class="fa-solid fa-check"></i>Water Wash ₹150</p>
                <p><i class="fa-solid fa-check"></i>Chain Lub ₹150</p>
                <p><i class="fa-solid fa-check"></i>Break Oil ₹150</p>
              </div>
            </div>
          </div>

          <div className="two-2-2">
            <h2>Engine Service</h2>
            <p><i class="fa-solid fa-check"></i>20% OFF</p>
            <p><i class="fa-solid fa-check"></i>Water Wash ₹150</p>
            <p><i class="fa-solid fa-check"></i>Chain Lub ₹150</p>
            <p><i class="fa-solid fa-check"></i>Break Oil ₹150</p>
          </div>
        </div>
      </section>

      <section className="three">
        <div className="three-1">
          <h1>Why Choose Us?</h1>
          <p>Our service is our greatest strength. Our range of services is the most efficient and affordable in the market.
          We make sure that the satisfaction needle is always sliding to the right on the customer satisfaction meter.</p>
        </div>
        <div className="three-3">
          <div className="three-3-1">
            <h1>Excellent at your service</h1>
            <p>At Zeo’s Pitshop we deliver nothing but best! We offer premium maintenance and
              servicing for all types of two-wheelers under one roof.</p>
          </div>
          <div className="three-3-2">
            <h1>Ride on Relaibility</h1>
            <p>Reliability and Transparency are the key factors of our business. Once your two
              wheeler is in our workshop you don’t have to worry about anything.</p>
          </div>
          <div className="three-3-3">
            <h1>Affordability</h1>
            <p>Our premium service are heavy on servicing but lightweight on your pocket.</p>
          </div>
        </div>
      </section>

      <section className="four">
        <div className="four-1">
          <div className="four-1-1">
            <img src="../../src/assets/banner2.jpg" alt="Shop image" />
          </div>

          <div className="four-1-2">
            <h1>Company Profile</h1>
            <p>Welcome to <strong>Zeos Pitshop</strong>, your trusted destination for premium motorcycle maintenance and repair
              services. With <span>10+ years</span> of experience and a passion for two-wheelers, we are committed to keeping
              your ride in top condition. From routine check-ups to major repairs, our skilled technicians
              ensure quality service every time.<br /><br />
              Located at the <span>heart of Coimbatore</span>, we take pride in offering customized solutions for all major
              motorcycle brands.Our state-of-the-art facilities and customer-first approach guarantee
              satisfaction and excellence.</p>
          </div>
        </div>

        <div className="four-2">
          <div className="four-2-1">
            <img src="../../src/assets/logo2.png" alt="" />
          </div>

          <div className="four-2-2">
          <h3>Aurogyasamy</h3>
          <p>+91 6374556308</p>
          <p>www.inquery@zeopitshop.com</p>
          <p>2/23, Palladam Rd, <br />Othakkalmandapam <br />Coimbatore-642228</p>
          </div>
        </div>

        <div className="four-3">
          <div>
          <img src="../../src/assets/user.svg" alt="" />
            <h5>Jebaraj</h5>
            <p>Mechanic</p>
            <p>7 +years Exp</p>
          </div>
          <div>
          <img src="../../src/assets/user.svg" alt="" />
            <h5>Daniel Raj</h5>
            <p>Mechanic</p>
            <p>6 +years Exp</p>
          </div>
          <div>
            <img src="../../src/assets/user.svg" alt="" />
            <h5>David Raj</h5>
            <p>Mechanic</p>
            <p>4 +years Exp</p>
          </div>
        </div>
      </section>

      <section className="five">
        <div className="five-1">
          <h1>OUR SERVICES</h1>
          <p>Our service serves you with the best quality! Our two-wheelers multi-brand repair, fix, and servicing
            is 
          always there to help you on the go.</p>
        </div>

        <div className="five-2">
          <div>
            <img src="../../src/assets/service1.jpg" alt="" />
            <h1>DOOR STEP SERVICE</h1>
            <p>Be it on the road or off the road, we are always ready to help you out. We pick your
              two-wheelers from your house, fix it like new, and deliver it to your place again so
              you don’t have to move.</p>
              <button>EXPLORE MORE <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src="../../src/assets/service2.jpg" alt="" />
            <h1>NO LONG QUEUES NOW</h1>
            <p>You don’t have to wait because we won’t make you wait. Our skilled force guarantees
              speedy servicing.</p>
              <button>EXPLORE MORE <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src="../../src/assets/service3.jpeg" alt="" />
            <h1>ON ROAD BREAK-DOWN SUPPORT</h1>
            <p>Be it anywhere anytime. We are always there to fix it up for you.</p>
              <button>EXPLORE MORE <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src="../../src/assets/service4.jpg" alt="" />
            <h1>TIMELY SERVICE REMINDER</h1>
            <p>We always remind you to keep your two-wheelers in check.</p>
              <button>EXPLORE MORE <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <div className="five-3">
          <button>View All Services</button>
        </div>
      </section>
    </>
  );
};

export default Home;
