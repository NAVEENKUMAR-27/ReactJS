import React from "react";
import './login.css';
import'bootstrap/dist/css/bootstrap.css'
import'bootstrap/dist/js/bootstrap.bundle'
import { Link } from "react-router-dom";
import Log from'./img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope,faLock, faArrowRight}from"@fortawesome/free-solid-svg-icons";

export function Login(){
    return(
      
      <>
       <div className="bg-color">
            <div className="container-fluid row centerdiv">
              <div className="col-lg-6 col-md-6 col-12 center">
                <img src={Log} className="col-lg-7 "/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12  col-12 text-center  p-5">
                 <h3>Member Login</h3><br/> 

                 <span className="log_span p-2 col-12">
                 <FontAwesomeIcon icon={faEnvelope}/>
                 <input type="Email" placeholder="Email" size="22" className="lo_inp p-1"/>
                 </span><br/><br/>

                 <span className="log_span p-2 col-12">
                 <FontAwesomeIcon icon={faLock}/>
                 <input type="password" placeholder="password" size="22" className="lo_inp p-1"/>
                 </span><br/><br/>

                 <input type= "button" value = "Login"  size="25" className="lo_but p-2 bg-success text-white col-12"/><br/><br/>
                 <p>Forget <span className="text-success">User Name / Password ?</span></p>
                 <p className="text-success">Create your Account<FontAwesomeIcon icon={faArrowRight} /></p>
              </div>   
            </div>
       </div>
      </>
    


        
    );
}

{/* <div className="container-fuild row ">
                   
                   <div className="col-lg-2 col-12 "></div>
                
                     <div className="row">
                             <div classNmae="col-lg-8">

                                    <div className="col-lg-7">
                                        <img src={Log} className="col-lg-12"/>
                                  </div>
                                  <div className="col-lg-5">
                                        <div className="">
                                            <FontAwesomeIcon icon={faEnvelope} /><input type="email" id="em" className=""/>
                                        </div>

                                        <div className="">
                                            <FontAwesomeIcon icon={faLock} /><input type="email" id="pass" className=""/>
                                        </div>
                                        <div className="">
                                                <input type="button" id="bt"  value="Login"className=""/>
                                        </div>

                               
                                   </div>
                            </div>

                         </div>   

                 <div className=" col-lg-2 col-12" ></div>
          </div> */}