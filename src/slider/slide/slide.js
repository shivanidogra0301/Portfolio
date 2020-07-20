import React,{Fragment} from 'react'
import "./slide.css"

const slide = ({url,current,prev,next}) => {
    return (
        <Fragment>
            <div style={{backgroundImage:`url(${url})`}} 
            className={'slide ' + (current==='true' ? 'active':null)}>
            {/* <div onClick={next} className="right__arrow"></div>
            <div onClick={prev} className="left__arrow"></div> */}
            <div className="overlay"></div>


            
        </div>
        </Fragment>
        
    )
}

export default slide
