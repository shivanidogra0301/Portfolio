import React, { Component } from 'react';
import classes from './projects.module.css';
import images from '../images';
import Project from './project/Project';
import Popup from './popup/popup';

export class Projects extends Component {
	state = {
		showPopup: false,
		current: 0
	};

	clickProjectHandler = (index) => {
		this.setState({showPopup: true, current: index });
	};

	closePopuphandler = () => {
		this.setState({ showPopup: false, current: 0 });
	};

	render() {
		let projects = images.map((data, index) => (
			<Project click={() => this.clickProjectHandler(index)} key={index} {...data} />
		));

		return (
			<div ref={this.props.refs} className={classes.projects}>
				{this.state.showPopup ? (
					<Popup
						slides={images[this.state.current].slides}
						show={this.state.showPopup}
                        close={this.closePopuphandler}
					/>
				) : null}

				<div className={classes.projects__header}>
					<span style={{color:"#ededed" , fontWeight:"200"}}>My </span>
					<span style={{width:"1rem"}}></span>
                	<span style={{color:"#ededed", fontWeight:"700"}}> Projects</span>
				</div>

				<div className={classes.projects__data}>{projects}</div>
			</div>
		);
	}
}

export default Projects;
