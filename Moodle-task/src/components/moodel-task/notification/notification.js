import React from "react";
import'bootstrap/dist/css/bootstrap.css'
import'./notification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck,faBell,faCircleExclamation } from"@fortawesome/free-solid-svg-icons"

export function Noti(){
    return(
        <>
         <div className="container-fuild row text-center d-flex">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 text-center text-white">
                           <h1 className="text-dark">Notification</h1>
                    <div className="col-lg-12 bg-primary mt-5 text-center">
                      <h3 className="col-lg-12"> <FontAwesomeIcon icon={ faCircleCheck}/>Information message </h3>
                    </div>
                    <div className="col-lg-12 bg-success mt-5 text-center">
                     <h3 className="col-lg-12"> <FontAwesomeIcon icon={ faCircleCheck}/>Success message  </h3>
                    </div>
                    <div className="col-lg-12 bg-warning mt-5 text-center">
                    <h3 className="col-lg-12" > <FontAwesomeIcon icon={ faBell}/>Warning message</h3>
                    </div>
                    <div className="col-lg-12 bg-danger mt-5 text-center">
                    <h3 className="col-lg-12">  <FontAwesomeIcon icon={ faCircleExclamation }/> Error message</h3>
                    </div>

              </div>
            <div className="col-lg-4"></div>
         </div>

        </>
    )
}