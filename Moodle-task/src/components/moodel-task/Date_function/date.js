import React, {useState} from "react";
import'bootstrap/dist/css/bootstrap.css';
import'./date.css';

export function Date(){
     const[Tdays,setTdays]=useState("");
     
     function Days(){
          var a=document.getElementById("dt").value;
          var now=new Date(a);
             alert(a);

     }
    
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center row dat_div ">      
                              <div className="col-lg-12">
                                     <marquee className="text_run">Course Duration in 190 Days</marquee>
                                      <input type="date" id="dt" placeholder="select Date"  className="m-5 inp_date" />
                                      < input type="Button" id="but" value="Get Date"  OnClick={Days}className="m-5 but"/>
                              </div>

                               <div ClassName="col-lg-12 text-center " >
                                   <h1 id="print">{Tdays}</h1>
                               </div>
                    </div>
               <div className="col-lg-2"></div>        
             </div>    
        </div>
        </>
    );
}

