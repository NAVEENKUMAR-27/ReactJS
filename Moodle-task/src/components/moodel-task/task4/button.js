import React from "react";
import'./button.css'
import'bootstrap/dist/css/bootstrap.css'
import Img from './img.jpg'



export function Button(){
    return(
        <>
              <div className="container-fluid  row  bg-img p-5  text-center">
                
                     <div className="col-lg-4  ">
                     </div>  
                    <div className="col-lg-4  text-center ">
                          <div className="col-lg-12 ">
                                    <h1 className="text-white strong"> Social Buttons</h1>
                                    <button className=" m bt_size bg-warning text-white">Like</button>
                                    <button className=" m bt_size ">Comment</button>
                                    <button className=" m bt_size bg-primary text-white ">Share</button>
                        </div>
                    </div>
                     <div className="col-lg-4">
                    </div>
            </div>
        </>
    );
}