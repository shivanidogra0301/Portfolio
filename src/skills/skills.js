import React from 'react'
import classes from "./skills.module.css"
import skills from "../skills"
import SkillItem from "./skill/skill"
const Skill = (props) => {

    let skill = skills.map((data,index)=>(
        <SkillItem key={index} {...data} />
    ))
    return (
        <div ref={props.refs} className={classes.skills}>
            <div className={classes.header}>My Skills</div>
            <div className={classes.skill_content}>
                {skill}
            </div>
            
        </div>
    )
}

export default Skill
