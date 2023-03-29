        import React from "react";
        import'bootstrap/dist/css/bootstrap.css'
        import"./tech.css"
        import Data from "./data.png"
        import Ml from "./ml.jpg"
        import Not from "./not.jpg"
        import Vr from"./vr.png"

        export function Tech(){
            return(
                <>
                <div classNmae="container text-center ">
                    <div className="row  ">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 text-center ml-3"> 
                            <h1 className="text-primary">Learn 4.0 Technologies</h1>
                            <p className="strong">Industry 4.0 is revolutionizing the way companies manufacture, improve and distribute their products. Manufacturers are integrating new technologies, including Internet of Thing, cloud computing and analytics</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                    <div class="row  ">  
                       <div className="col-lg-2"></div>
                            <div className=" col-lg-4 ml-3 p">
                                <div className="card-body b-card1">
                                    <h3 className="card-titel">Data Scientist</h3>
                                    <p className="card-text">Data scientists are a new breed of analytical data expert who have the technical skills to solve complex problems.</p>
                                    <img src={Data} className="col-lg-4 float-right"/>
                                </div>
                            </div>

                            <div className=" col-lg-4 ml-3 p">
                                <div className="card-body b-card2">
                                    <h3 className="card-titel">NOT Developer</h3>
                                    <p className="card-text">Become a full-stack developer by building real projects. Learn React, React Native, AWS Amplify and other modern technologies that power WEB and Mobile.</p>
                                    <img src={Not} className="col-lg-4 float-right "/>
                                </div>

                            </div>

                            <div className="col-lg-2"></div>
                    </div>
                    <div className="row mt-5">  
                               <div className="col-lg-2"></div>
                            <div className="col-lg-4 ml-3 p">
                                <div className="card-body b-card3">
                                    <h3 className="card-titel">VR Developer</h3>
                                    <p className="card-text">A VR developer will work with both. 3D modeling. A VR developer will likely need to work with a 3D system like 3DS Max and a 3D software development system like a game engine</p>
                                    <img src={Vr} className="col-lg-4 float-right"/>
                                </div>   
                            </div>

                            <div className=" col-lg-4 ml-3 p">
                                <div className="card-body b-card4">
                                    <h3 className="card-titel">ML Developer</h3>
                                    <p className="card-text">A machine learning  developer is an expert on using data to training models. The models are then used to automate processes like image classification, speech recognition, and market forecasting.</p>
                                    <img src={Ml} className="col-lg-4 float-right"/>
                                </div>
                            </div>

                            <div className="col-lg-2"></div>
                    </div>
                </div>
                </>
            );
        }

       