import React, { Component } from 'react';
import classes from './projects.module.css';
import images from '../images';
import Project from './project/Project';
import Popup from './popup/popup';

export class Projects extends Component {
	state = {
		showPopup: false,
		url: '',
		current: 0
	};

	clickProjectHandler = (image, index) => {
		this.setState({ url: image, showPopup: true, current: index });
	};

	closePopuphandler = () => {
		this.setState({ showPopup: false, current: 0 });
	};

	clickSlideHandler = (image) => {
		this.setState({ url: image });
	};

	render() {
		let projects = images.map((data, index) => (
			<Project click={() => this.clickProjectHandler(data.image, index)} key={index} {...data} />
		));

		return (
			<div ref={this.props.refs} className={classes.projects}>
				{this.state.showPopup ? (
					<Popup
						slides={images[this.state.current].slides}
						show={this.state.showPopup}
                        close={this.closePopuphandler}
                        click={this.clickSlideHandler}
						url={this.state.url}
					/>
				) : null}

				<div className={classes.projects__header}>My Projects</div>

				<div className={classes.projects__data}>{projects}</div>
			</div>
		);
	}
}

export default Projects;
