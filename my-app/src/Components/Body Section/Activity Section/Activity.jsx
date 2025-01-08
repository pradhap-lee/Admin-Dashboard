import React from 'react'
import './activity.css';

import { BsArrowRightShort } from "react-icons/bs";
import user from '../../../Asserts/user.jpg'
import user1 from '../../../Asserts/user1.jpg'
import user2 from '../../../Asserts/user2.webp'
import user3 from '../../../Asserts/user3.jpg'
import user4 from '../../../Asserts/user4.webp'
import user5 from '../../../Asserts/user5.webp'




function Activity() {
  return (
    <div className='activitySection'>
        <div className="heading flex">
          <h1>Resent Activity</h1>
          <button className='btn'>
            See All
            <BsArrowRightShort  className="icon"/>

          </button>
        </div>

           <div className="secContainer grid">
                <div className="singleCustomer flex">
                  <img src={user} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Billie Eilish</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      2 min ago 
                     </div>


                </div>

                <div className="singleCustomer flex">
                  <img src={user3} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Selena Gomez</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      5 min ago 
                     </div>


                </div>

                <div className="singleCustomer flex">
                  <img src={user1} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Diya</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      10 min ago 
                     </div>

                     


                </div>

                <div className="singleCustomer flex">
                  <img src={user2} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Devi</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      15 min ago 
                     </div>


                </div>

                <div className="singleCustomer flex">
                  <img src={user4} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Lakshmi</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      20 min ago 
                     </div>


                </div>

                <div className="singleCustomer flex">
                  <img src={user5} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Uma</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      45 min ago 
                     </div>


                </div>

                <div className="singleCustomer flex">
                  <img src={user1} alt="Customer Image" />

                   <div className="customerDetails">

                    <span className="name">Amala</span>
                     <small>Ordered a new plant</small>
                   </div>

                     <div className="duration">
                      45 min ago 
                     </div>


                </div>
           </div>
    </div>
  )
}

export default Activity
