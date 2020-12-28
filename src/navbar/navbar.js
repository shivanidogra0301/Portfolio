import React, { useState, Fragment , useRef , useEffect } from 'react';
import classes from './navbar.module.css';

const Navbar = ({ scroll }) => {
	
	useEffect(() =>{
		window.addEventListener('resize',()=>{
		const as = document.querySelectorAll(".link");
		if(idx != null){
		let x = as[idx];
		markerRef.current.style.left = x.offsetLeft + "px";
		markerRef.current.style.width = x.offsetWidth + "px";
		}})
	})

	const [ links ] = useState([ 'About Me', 'Skills', 'Projects', 'Contact Me' ]);
	const [idx , setIndex] = useState(null);

	let navbar_links = links.map((name, index) => (
		<li  key={index} onClick={(e) => clickLink(index , name , e)}
		className={classes.link + " " + "link" + " " + (idx === index ? classes.link_active : null)}>
			{name}
		</li>
	));

	const navRef = useRef();
	const markerRef = useRef();

	const clickLink = (index ,name , e)=>{
		scroll(name)
		indicator(e.target);
		setIndex(index);
	}

	const indicator = e => {
		markerRef.current.style.left = e.offsetLeft + "px";
		markerRef.current.style.width = e.offsetWidth + "px";


	}
	return (	
		<Fragment>
			<div ref={navRef} className={classes.navbar}>
				<div className={classes.navbar__links}>
					<div ref = {markerRef} className={classes.marker}></div>
					{navbar_links}
					</div>
			</div>			
		</Fragment>
	);
};

export default Navbar;
