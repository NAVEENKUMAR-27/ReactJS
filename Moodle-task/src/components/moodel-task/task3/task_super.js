import React from "react";
import'./task_3.css'
import'bootstrap/dist/css/bootstrap.css'
import Rcb from './csk.png'
import Csk from './rcb.png'


export function Ipl(){
    return(
        <>
              <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-lg-3 ">
                    </div>
                             
                    <div className="col-lg-6  text-center bg-c  p-5">
                         <div>
                            <h1 className="text-white"> Super Over League </h1>
                         </div>
                         <div>
                          <img src={Rcb} width="200px" />
                          <img src={Csk} width="200px" />
                        </div>
                    </div>
                    <div className="col-lg-3 ">

                    </div>
                </div>
            </div>
        </>
    );
}