import React from 'react'
import './Waitlist.css'

const Waitlist = () => {
  return (
    <>
    <div className="wait-1">
        <h1>Zeo's &nbsp;Pitshop</h1>
        <h3>Bike Service Center</h3>
    </div>

    <div className="wait-2">
        <div className="wait-2-1">
            <h1>Best Quality with Affordable Price</h1>

            <button>Launching Soon</button>

            <h2>Register Now to get Special Offers</h2>
        </div>

        <div className="wait-2-2">
            <form action="#">
                <h1>Register Form</h1>
                
                <li>
                <label>Name</label>
                <input type="text" />
                </li>
                <li>
                <label>Mobile</label>
                <input type="number" />
                </li>
                <li>
                    <label>Email</label>
                    <input type="email" />
                </li>
                <li>
                    <label>Address</label>
                    <input type="text" />
                </li>
                <li>
                    <button>Submit</button>
                </li>
            </form>
        </div>
    </div>
    </>
  )
}

export default Waitlist