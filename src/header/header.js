import React , {useEffect} from 'react'
import "./header.css"
import Typed from "typed.js"

const Header = () => {

    useEffect(()=>{
        const strings = [
                ' a Software Developer',
                ' a Designer',
                
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

    return (
        <div className="header">
            <div className="animated-box"></div>
            <div className="animated-box"></div>
            <div className="animated-box"></div>
            <div className="animated-box"></div>
            <div className="animated-box"></div>
            <div className="animated-box"></div>

            <div className="main">
                <div className="heading1"> Hi , my name is</div>
                <div className="heading2">
                    <span className="heading2-primary">Shivani</span>
                    <span className="heading2-secondary"> Dogra</span>
                </div>
                <div className="heading3">
                    <span className="heading3-primary">I'm </span>
                    <span className="heading3-secondary" id="typed"></span>

                </div>
            </div>

            <div className="bottom">
               <div className="bottom__box">
                    <div className="bottom__box__dot"></div>
               </div>
            </div>

            <div className="icons_box">
                
                    <a className="icon_box" target="_blank" href='mailTo:shivanidogra789@gmail.com'>
                    <svg className="icon" viewBox="0 0 20 20">
                        <path d="M1.574 5.286c0.488 0.262 7.248 3.894 7.5 4.029s0.578 0.199 0.906 0.199c0.328 0 0.654-0.064 0.906-0.199s7.012-3.767 7.5-4.029c0.489-0.263 0.951-1.286 0.054-1.286h-16.919c-0.897 0-0.435 1.023 0.053 1.286zM18.613 7.489c-0.555 0.289-7.387 3.849-7.727 4.027s-0.578 0.199-0.906 0.199-0.566-0.021-0.906-0.199-7.133-3.739-7.688-4.028c-0.39-0.204-0.386 0.035-0.386 0.219s0 7.293 0 7.293c0 0.42 0.566 1 1 1h16c0.434 0 1-0.58 1-1 0 0 0-7.108 0-7.292s0.004-0.423-0.387-0.219z"></path>
                    </svg>
                    </a>
            
                <a className="icon_box" target="_blank" href="https://github.com/shivanidogra0301/">
                    <svg className="icon" viewBox="0 0 32 32">
                        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                    </svg>
                </a>
                  
                    <a className="icon_box" target="_blank" href="https://www.linkedin.com/in/shivanidogra/">
                        <svg className="icon" viewBox="0 0 32 32">
                            <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                        </svg>
                    </a>    
               
            </div>
        </div>
    )
}

export default Header
