import React from 'react'
import classes from "./popup.module.css"
const Popup = (props) => {

    let images = props.slides?props.slides.map((img,index)=>(
        <img onClick={()=>props.click(img)} src={img} alt="" key={index}/>
    )):null
    return (
        <>
        <div onClick={props.close} className={classes.popup +" "+(props.show ?classes.popup_show:null)}></div>
        <div className={classes.popup__content}>
        <div className={classes.popup__image}>
            <img  className ={classes.img} src={props.url} alt=" " />
        </div>
        {props.slides ?<div className={classes.slides}>
            {images}
        </div>:null}
    </div>
    </>
    )
}

export default Popup
