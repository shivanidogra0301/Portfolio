import React, { useState, Fragment , useRef , useEffect } from 'react';
import classes from './navbar.module.css';

const Navbar = ({ scroll }) => {
	
	const [ links ] = useState([ 'About Me', 'Skills', 'Projects', 'Contact Me' ]);
	const [ current, setCurrent ] = useState(0);

	let navbar_links = links.map((name, index) => (
		<li key={index} onClick={() => clickLink(index,name)}
		className={classes.link +" "+(current===index ? classes.link_active:null)}>
			{name}
		</li>
	));

	const navRef = useRef();



	

	const clickLink = (index,name)=>{
		setCurrent(index)
		scroll(name)
	}

	useEffect(()=>{

		setInterval(()=>{

			if(window.scrollY > 550){
				navRef.current.style.position = 'fixed';
				navRef.current.style.top = '0';
				navRef.current.style.margin = '0 0';

			}
			
			else{
				navRef.current.style.position = 'relative'
				navRef.current.style.top = '0'
			

			}
			
		},500)
		

	

	})

	
	return (
		
		<Fragment>
			


			<div ref={navRef} className={classes.navbar}>

				<div className={classes.navbar__links}>{navbar_links}</div>
			</div>

			
			
		</Fragment>
	);
};

export default Navbar;
