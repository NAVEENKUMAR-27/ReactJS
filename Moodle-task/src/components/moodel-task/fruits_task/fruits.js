import React, {useState} from "react";
import'bootstrap/dist/css/bootstrap.css'
import'./fruits.css'
import Mango from './app.png'
import Pine from './pine.png'
import Ma from './ma.jpg'

export function Fruits(){
     const[Mangadd,setMangadd]=useState(1);
     const[Pineadd,setPineadd]=useState(1);
     function reset(){
        setMangadd(Mangadd*0);
        setPineadd(Pineadd*0)
     }
    
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center fruit_div ">
                             <div className="col-lg-12">
                                    <h1 className="strong"> <span className="text-primary"> Naveen </span> ate <span className="text-info"> {Mangadd} </span><span className="text-danger"> Apples </span><span className=" text-info"> {Pineadd} </span> <span className=" text-warning"> Pineapples </span></h1>
                             </div>
                             <div className="col-lg-12 row">
                                <div className="col-lg-6">
                                   <img src={Mango} className="col-lg-10"/>
                                   <button onClick={()=>{setMangadd(Mangadd+1)}} className="mt-2 col-lg-5 furit_ap">Apples</button>
                                </div>

                                 <div className="col-lg-6">
                                    <img src={Pine} className="col-lg-8"/>
                                    <button onClick={()=>{setPineadd(Pineadd+1)}} className="col-lg-5 mt-4 furit_pine">Pineapple</button>
                                 </div>

                             </div>

                             <div className="col-lg-12 text-center">
                                 <button onClick={reset} className="mt-3 col-lg-5 furit_reset" >Reset</button>
                             </div> 
                    </div>
               <div className="col-lg-2"></div>        
             </div>    
        </div>
        </>
    );
}

