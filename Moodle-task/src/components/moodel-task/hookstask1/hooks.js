import React, {useState} from "react";
import'bootstrap/dist/css/bootstrap.css'
import'./hooks.css'

export function Calculator(){
     const[Add,setAdd]=useState(1);
    
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-3"></div>
                    <div className="col-lg-6 text-center bg-info mt-5 div">
                            <h1 className="text-danger">{Add}</h1>
                            <button onClick={()=>{setAdd(Add+1)}} className="b_add ">Add</button>
                            <button onClick={()=>{setAdd(Add-1)}} className="b_less ">Less</button>
                            <button onClick={()=>{setAdd(Add*0)}} className="b_resert ">Reset</button>
                    </div>
               <div className="col-lg-3"></div>        
             </div>    
        </div>
        </>
    );
}

