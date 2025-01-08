import React from 'react'
import './listing.css';


import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import img from '../../../Asserts/image.png'
import img1 from '../../../Asserts/image1.png'
import img2 from '../../../Asserts/image2.png'
import img3 from '../../../Asserts/image3.png'
import img4 from '../../../Asserts/image4.png'

import user from '../../../Asserts/user.jpg'
import user1 from '../../../Asserts/user1.jpg'
import user2 from '../../../Asserts/user2.webp'
import user3 from '../../../Asserts/user3.jpg'

function Listing() {
  return (
    <div className='lisitingSection'>


      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

           <div className="secContainer flex">
            <div className="singleItem">
            <AiFillHeart  className="icon" />
               <img src={img} alt="Image Name" />
               <h3>Annual Vince</h3>
            </div>

            <div className="singleItem">
            <AiOutlineHeart  className="icon" />
               <img src={img1} alt="Image Name" />
               <h3>Coffee Plant</h3>
            </div>

            <div className="singleItem">
            <AiOutlineHeart  className="icon" />
               <img src={img2} alt="Image Name" />
               <h3>Button Ferm </h3>
            </div>

            <div className="singleItem">
            <AiFillHeart  className="icon" />
               <img src={img3} alt="Image Name" />
               <h3>Spider Plant</h3>
            </div>

           

           </div>

         <div className="sellers flex">
            <div className="topSellers">
              <div className="heading flex">
                 <h3>Top Sellers</h3>
                 <button className='btn flex'>
                   See All <BsArrowRightShort className="icon" />
                 </button>
              </div>

               <div className="card flex">
                  <div className="users">
                    <img src={user} alt="User Image" />
                    <img src={user1} alt="User Image" />
                    <img src={user2} alt="User Image" />
                    <img src={user3} alt="User Image" />
                  </div>

                  <div className="cardText">
                    <span>
                      14.556 Plant sold <br />
                      <small>
                        21 Sellers 
                        <span className='data'>
                            7 Days
                        </span>
                      </small>
                    </span>
                  </div>
               </div>

            </div>



            <div className="featuredSellers">
              <div className="heading flex">
                 <h3>Featuned Sellers</h3>
                 <button className='btn flex'>
                   See All <BsArrowRightShort className="icon" />
                 </button>
              </div>

               <div className="card flex">
                  <div className="users">
                    <img src={user3} alt="User Image" />
                    <img src={user} alt="User Image" />
                    <img src={user2} alt="User Image" />
                    <img src={user1} alt="User Image" />
                  </div>

                  <div className="cardText">
                    <span>
                      28,556 Plant sold <br />
                      <small>
                        26 Sellers 
                        <span className='data'>
                            31 Days
                        </span>
                      </small>
                    </span>
                  </div>
               </div>

            </div>

            


            
         </div>
    </div>
  )
}

export default Listing
