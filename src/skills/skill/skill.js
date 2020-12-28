import React, { Component } from 'react'
import classes from "./skill.module.css"
import '../../../node_modules/devicon/devicon.min.css'


export class skill extends Component {
    render() {
        return (
            <div className={classes.skill}>
                <i style={{fontSize:"6rem" , color:"#fff"}} className={this.props.icon}></i>
                <div className={classes.skillname}>{this.props.name}</div>                
            </div>
        )
    }
}

export default skill
