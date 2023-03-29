import React from "react";
import'bootstrap/dist/css/bootstrap.css'
import './feedback.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceSmile,faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Feed(){
    return(
        <>
        <div className="container p-5 ">
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center mt-5 feed_div ">
                                <div className="col-lg-12">
                                        <h3 className="strong">How statistfied are you with our  customer  support performance</h3>
                                </div>
                             <div className="col-lg-12 row mt-5">
                                    <div className="col-lg-12">
                                         <Link to='/Bac' > <FontAwesomeIcon icon={faFaceSadTear} className=" emoji_tear m-4"/> </Link>
                                          <Link to='/Bac'>   <FontAwesomeIcon icon={faFaceSmile} className=" emoji_smile m-4"/></Link>
                                           <Link to='/Bac'> <FontAwesomeIcon icon={faFaceSadCry} className="emoji_cry m-4"/>  </Link>   
                                    </div>

                             </div>                            
                    </div>
               <div className="col-lg-2"></div>        
             </div>    
        </div>

        </>
    );



    
}

