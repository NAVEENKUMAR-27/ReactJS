import React from "react";
import'bootstrap/dist/css/bootstrap.css'
import './feedback1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Back(){
    return(
        <>
        <div className="container p-5 ">
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center mt-5 back_div ">
                                <div className="col-lg-12">
                                        <FontAwesomeIcon  className="b_heart"icon={faHeart} />
                                        <h4 className="strong">Thank you!</h4>
                                </div>
                             <div className="col-lg-12 row mt-5">
                                    <div className="col-lg-12">
                                             <h3>We will use to your feedback to improve our customer support performance</h3> 
                                    </div>

                             </div>                            
                    </div>
               <div className="col-lg-2"></div>        
             </div>    
        </div>

        </>
    );
}

