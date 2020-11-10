import React , {useState , useEffect , useRef} from 'react'
import Slide from "./slide/slide"
import classes from  "./slider.module.css"
import Img1 from "../images/one.jpg";
import Img3 from "../images/three.jpg";
import Img2 from "../images/two.jpg";
import Typed from "typed.js"


const Slider = () => {

    
    const type = useRef()
   

    useEffect(()=>{

    const strings = [
            'Software Developer',
            'Full Stack Web Developer',
            'UX/UI Designer',
            'Deep Learning Enthusiast'
    
        ]
    
    
    const options = {
            strings:strings,
            typeSpeed:50,
            backSpeed:60,
            loop:true,
            delay:1000
        }

    const el = document.querySelector("#typed")
    
    
    const typed = new Typed(el,options)


    },[])

    const images = [Img1,Img2,Img3]

      const [current,setCurrent] = useState(0)

      const next = ()=>{
        
          if((current) === images.length-1){
                setCurrent(0)
          }

          else{
              setCurrent(current+1)

          }

      }

      const prev = ()=>{

        if(current === 0){
            
            setCurrent(images.length-1)
        }

        else
        {
            setCurrent(current-1);
        }
        
      }

      useEffect(() => {
            
        setTimeout(()=>{
            next()


        },3000)

      }, [current])

      let slides = images.map((url,index)=>(
          <Slide next={next} prev={prev} current={current === index?'true':'false'} key={index} url={url}/>
      ))
      
    return (
        <div className={classes.slider}>

            {slides}
            <div className={classes.title}>Shubham Dogra</div>
            <div className={classes.type} id="typed"/>
            <div className={classes.slide}>
            <div className={classes.dot}></div>
        </div>

        </div>
    )
}

export default Slider
