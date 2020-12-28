import React, { Component } from 'react'
import classes from "./contact.module.css"
import AOS from "aos"

export class Contact extends Component {

    componentDidMount(){
        AOS.init({
            duration:200,
            once:false,
            easing:'ease-in'
        })

        const $ = window.$;
        const $a = $("#an");
        console.log($a);
    }
    render() {
        return (
            <div ref={this.props.refs}  className={classes.contact}>
                <div  style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className={classes.title}>
                        <span style={{color:"#ededed" , fontWeight:"200"}}>Like</span>
                        <span style={{color:"#ededed", fontWeight:"700"}}>  what you see?</span>
                    </div>
                    <div className={classes.message}>I'd love to hear from you</div>
                    <a data-aos="fade-top" id="an" className={classes.btn} href='mailTo:shubhamdogra076@gmail.com'>Get In Touch
                    <span></span>
                    </a>
                </div>
                
                
            </div>
        )
    }
}

export default Contact
