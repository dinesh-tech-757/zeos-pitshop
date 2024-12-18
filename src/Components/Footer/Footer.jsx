import React from "react";
import "./Footer.css";
import footlogo from "../../assets/logo2.png"

const Footer = () => {
  return (
    <>
      <section className="foot-1">
        <section className="foot1">
          <div>
            <img src={footlogo} alt="" />
          </div>
          <div>
            <h1><i class="fa-solid fa-location-dot"></i>ADDRESS</h1>
            <p>
              23-c3, Palladam road, AVT Opp,
              <br />
              Othakkalmandapam - 641 022
            </p>
          </div>
          <div>
            <h1><i class="fa-solid fa-phone"></i>PHONE</h1>
            <p>+91 6374556308</p>
          </div>
          <div>
            <h1><i class="fa-solid fa-envelope"></i>EMAIL US</h1>
            <p>inquery@zeopitshop</p>
          </div>
        </section>

        <section className="foot2">
          <div>
            <h1>OUR SERVICE</h1>
            <p>Door step service</p>
            <p>No Long Queues Now</p>
            <p>On Road Breakdown Support</p>
            <p>Timely Service Reminders</p>
            <p>Spares Warranty</p>
            <p>Lubricant</p>
            <p>Spares</p>
            <p>Insurance</p>
          </div>
        </section>

        <section className="foot3">
          <div>
            <h1>OUR NEWS LETTER</h1>
            <p>
              You can subscribe to Speedforce and <br />stay updated with the latest <br />information from us.
            </p>
            <input placeholder="Enter Your Name" type="text" />
            <input placeholder="Enter Your Email" type="text" />
            <button>Subscribe Now</button>
          </div>
        </section>
      </section>

      <section className="foot-2">
        <div>
          <p>Copyright &copy; 2024 SpeedForce. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
