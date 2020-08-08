import React , {useRef} from 'react';
import Slider from "./slider/slider"
import Navbar from "./navbar/navbar"
import About from "./About/About"
import Contact from "./contact/Contact"
import Footer from "./footer/footer"
import Projects from "./Projects/Projects"
import Skills from "./skills/skills"



function App() {

  let profileRef = useRef();
  let contactRef = useRef();
  let SkillRef = useRef();
  let projectsRef = useRef();




  const scrollIntoView = (content)=>{
    switch(content){
       case('About Me'):
       let profileTop = profileRef.current.offsetTop - 100
       window.scrollTo({behavior:'smooth' , top:profileTop})
       break;

       case('Skills'):
       let skillTop = SkillRef.current.offsetTop-100;
       window.scrollTo({behavior:'smooth' ,top:skillTop})
       break;

       case('Projects'):
       let projectsTop = projectsRef.current.offsetTop - 105
       window.scrollTo({behavior:'smooth' ,top:projectsTop})

       
        break;

      case('Contact Me'):
        let contacTop = contactRef.current.offsetTop;
        contactRef.current.scrollIntoView({behavior:'smooth' , block:'end'})
        break;

      default:return

    }
  }


  return (
    <div style={{backgroundColor:"#F2E9E4"}}>
      <Slider/>
      <Navbar scroll={scrollIntoView} />
      <About refs={profileRef}/>
      <Skills refs={SkillRef}/>
      <Projects refs={projectsRef}/>
      <Contact refs={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;
