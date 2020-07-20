import React ,{useRef , useLayoutEffect , useState}from 'react'
import "./image.css"

const Skill = () => {

    const btn = useRef(null);

    const [show, setShow] = useState(false)

    const scrollEvent = ()=>{
        
        let topPosition = btn.current.getBoundingClientRect().top+200;
        const scrollPosition = window.scrollY + window.innerHeight;
        if(topPosition < scrollPosition) { 
                setShow(true)
          }
    }

    useLayoutEffect(()=>{
            window.addEventListener('scroll',scrollEvent)

    },[])

    
    return (
        <div>



<div className="skill">
    
</div>

<div className="image ">
    <img  className={ show ?"image_scale":null}  src={require("../images/one.jpg")}/>
<div className={'image_box ' + (show ? 'active':null)}  ref={btn}>
</div>

</div>



<div className="skill">
    
</div>

</div>
       
      
    )
}

export default Skill
