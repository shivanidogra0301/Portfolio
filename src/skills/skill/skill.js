import React, { Component } from 'react'
import classes from "./skill.module.css"

export class skill extends Component {
    render() {
        return (
            <div className={classes.skill}>
                <img className={classes.img} alt="" src={this.props.img} />
                <div className={classes.skillname}>{this.props.name}</div>

                
            </div>
        )
    }
}

export default skill
