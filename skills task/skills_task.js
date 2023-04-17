  import React,{useEffect,useState} from "react";
  import'bootstrap/dist/css/bootstrap.css'
  import'./skills_task.css'
  import'bootstrap/dist/js/bootstrap.bundle'
  import Logos from"./logo.webp"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faBell,faBookmark } from "@fortawesome/free-regular-svg-icons";
  import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



  export function Skills_jason(){
    const[profile,setProfile]=useState([])
    useEffect(()=>{
      fetch("http://localhost:3000/profile.json")
      .then(res=>res.json())
      .then(add=>setProfile(add))
    })

      return(
          <>
          <div className="bg_img_skil">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light nav_back ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                          </button>
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#"><img src={Logos} alt="no image" className="col-lg-3"/></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active text_nav ml-3 ">
                            <a class="nav-link" href="#">Find Candidates <span class="sr-only">(current)</span></a>
                        </li>
                          <li class="nav-item active ml-3 text_nav">
                            <a class="nav-link" href="#">Find Job</a>
                          </li>
                          <li class="nav-item active ml-3 text_nav">
                            <a class="nav-link ">Find Companies</a>
                        </li>
                


              </ul>

            <form class="form-inline my-2 my-lg-0 mr-5 ">
                <a class="nav-link mr-5 "><FontAwesomeIcon icon={faBell} className="icon_skill"/></a>
                <input  class=" btn_log2  mr-5" type="submit" value="Login"  />
                  <input class="btn_log1   mr-4" value="Register" type="submit"/>
              </form>
          </div>
        </nav>

          <div className="container-fluid">
            <div className="row"> 
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                      <div className="col-lg-12 text-center pt-5">
                          <h2>Find the Candidates as per your requirement</h2>
                      </div>
                      <div className="col-lg-12 row  pt-4">
                              <div className="col-lg-1"></div>
                                      
                                    <span className="serach_tast text-center col-lg-8 ml-5">    
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2 icon_m"/>        
                                        <input type="text" className="bac_in ml-1" placeholder="Job Title/Key word"/>  |
                                        <FontAwesomeIcon icon={faLocationDot} className="icon_m ml-2"/>
                                        <input type="text" className="bac_in ml-1" placeholder="Add country/city"/>
                                        <input type="button" className="bac_box ml-1 btn-sm" value="Search"/>
                                    </span>
                                      
                              <div className="col-lg-1"></div>
                      </div>
                  </div>
                  <div className="col-lg-2"></div>

            </div>

          </div>
              

          <div className="container-fluid">
            <div className="row pt-5">
                <div class="dropdown  col-lg-2">
                      <button class="  btn-sm  dropdown-toggle btn-color" type="button" data-toggle="dropdown" aria-expanded="false">
                              Experience
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>

                  <div class="dropdown  col-lg-2">
                      <button class=" btn-sm  dropdown-toggle btn-color" type="button" data-toggle="dropdown" aria-expanded="false">
                              HTML/CSS
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>
                

                  <div class="dropdown  col-lg-2">
                      <button class=" btn-sm  dropdown-toggle btn-color" type="button" data-toggle="dropdown" aria-expanded="false">
                              Coimbatore
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>


                  <div class="dropdown  col-lg-2">
                      <button class="  btn-sm dropdown-toggle btn-color" type="button" data-toggle="dropdown" aria-expanded="false">
                              UI/UX designer
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>


                  <div class="dropdown    col-lg-2">
                      <button class=" btn-sm  btn-color  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Gender
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>

                
                  <div class="dropdown col-lg-2">
                      <button class=" btn-sm  dropdown-toggle btn-color" type="button" data-toggle="dropdown" aria-expanded="false">
                            Age
                      </button>
                                    <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                  </div>
                  
            </div>
            </div> 
          
      </div>  
        <div className="container-fluid">
            <div className="row justify-content-around">
                  {
                    profile.map((value,index)=>(
                      <>
                     <div class="card col-lg-2 mx-5 my-3  box_bor ">
                         <img src={value.img} class="card-img-top img_height" alt="..."/>
                                <div class="card-body text-center">
                                <h5 class="card-title">{value.name}</h5>
                                <p class="card-text">{value.Des}</p>
                           <button class=" btn_cat ">View</button>
                          </div>
                        </div>
                      
                      
                      
                      
                      
                      </>
                    ))

                  }

            </div>
        </div>

          
          
          
          
          
          
          </>
      );
  }