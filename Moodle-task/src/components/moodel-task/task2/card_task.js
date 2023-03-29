    import React from "react";
    import'./card.css'
    import'bootstrap/dist/css/bootstrap.css'
    import Profile from './profile.png'
    import Watch from './watch.png'
    import Back from './back.png'

    export function Card(){
        return(
            <>
                <div className="bgimg container-fluid text-center">
                           <h1>Congratulation</h1>
                    <div className="row p-5">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                        </div>
                                 
                        <div className="div col-lg-4 col-md-4   text-center p-5">
                            <img src={Profile} className="col-lg-4  col-md-4 col-sm-4  "/>
                            <h3 className="strong text-center">NaveenKumar</h3>
                            <p className="p-4">Buy Watches for Men. Huge collection of men's watches at low offer price & discounts at COD,</p>
                            <img src={Watch} className="col-lg-4 col-md-4  col-sm-4 "/>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">

                        </div>
                    </div>
                </div>
            </>
        );
    }


