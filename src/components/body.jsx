import React from "react";
import salonImage from '../images/SalonImage.png'
import Allservice from "./Allservice";
import BookNow from "./BookNow";


const Body = () => {
    return(
        <div className="main-body">
          <div className="div-body-left">
            <div className="div-welcome">
            Welcome To Simpstyle
            </div>
            <div className="div-best-hair">
            Best Hair Salon For A professional Look 
            </div>
            <div className="div-simp">
            Simpstyle offers high performance customized facial to provide you with visible results.
            </div>
            
            <div className="div-book-now">
            <BookNow/>
            <Allservice/>
            </div>

          </div>
          <div className="div-body-right">
            <img className="img-barb" src={salonImage} alt="scissors" />

          </div>

        </div>
      
    );
}
export default Body;