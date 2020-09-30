import React, { Component } from 'react'
import classes from "./contact.module.css"
import AOS from "aos"

export class Contact extends Component {

    componentDidMount(){
        AOS.init({
            delay:200,
            duration:1000,
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
                <div data-aos="fade-top" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div className={classes.title}>Like what you see?</div>
                    <div className={classes.message}>I'd love to hear from you</div>
                    <a id="an" className={classes.btn} href='mailTo:shubhamdogra076@gmail.com'>Get In Touch
                    <span></span>
                    </a>
                </div>
                
                
            </div>
        )
    }
}

export default Contact
