import React from "react";
import'./style.css'
import'bootstrap/dist/css/bootstrap.css'

export function Hello(){
    return(
        <>
             <marquee className="txt_h">Hello word!</marquee>
             <marquee direction="up" className="txt_h mar_ce">Welcome back Squad</marquee>
        </>
    )
}  