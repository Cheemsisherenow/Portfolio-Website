import {React, useState, Suspense, useRef} from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap/all'
import { Html, Center, PresentationControls } from '@react-three/drei'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame } from '@react-three/fiber'
import Bot from '../../public/models/Bot2'
import Lights from './lights'
import clsx from 'clsx'
import Tiltcard from './Tilecard'
gsap.registerPlugin(ScrollTrigger)


const Physics = () => {
    const [load, setLoad] = useState(false);
    const [canvasReady, setCanvasReady] = useState(false);
    const [expanded, setExpanded] = useState(false)
    const groupRef = useRef(null);
    const groupText = useRef(null);
    const demoRef = useRef(null);
    const physicsRef = useRef(null);
    const textRef = useRef(null)
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)
    useGSAP(() => {
        if (demoRef.current) {
            gsap.set(demoRef.current, { opacity: 0, y: "100%" });   
        }
    }, [])
    const handleClick = () => {
        const tl = gsap.timeline()
        if (!expanded) {
          tl.to(textRef.current, { opacity: 0, y: "100%", duration: 1 , })
          .to(canvasRef.current, { y: "100%", opacity: 0, duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '-900%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(physicsRef.current, {x:"50%", duration: 1, ease: "power3.inOut"}, '<')
          
          .to(demoRef.current, {y:"0%", opacity: 1, duration: 1, ease: "power3.inOut"}, "<")
          
        } else {
          tl.to(demoRef.current, {y:"100%", opacity: 0, duration: 1, ease: "power3.inOut"}, "+=.1")
          .to(textRef.current, { opacity: 0, y: "100%", duration: 1,})
          .to(canvasRef.current, {y: "0%", opacity: 1,  duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '0%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(physicsRef.current, {x:"0%", duration: 1, ease: "power3.inOut"}, '<')
          .to(textRef.current, { opacity: 1, y: "0%", duration: 1, })
          
        }
        setExpanded(!expanded)
        }
    useGSAP(()=>{
        
        ScrollTrigger.create({
                    trigger: '#physics',
                    start: 'top 80%', 
                    once: true,      
                  })
        const tl3 = gsap.timeline({
            scrollTrigger: {
            trigger: "#physics",
            start: "top 50%",
            end: "top 20%", 

            }
        })
        tl3.from(physicsRef.current, { y: 100, opacity: 0 })
        .from(textRef.current, { y: 100, opacity: 0, delay:.1 },"<")
        .from(canvasRef.current, { y: 100, opacity: 0, delay:.1 }, "<")
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
},[])
  return (
    <div id="physics" className="relative w-screen h-[105vh] bg-[#072a43] overflow-hidden">
        
        
        <div className="relative w-screen h-[90vh] flex justify-between rounded-3xl backdrop-blur-md bg-opacity-20 bg-black/5 border p-4">
            <div ref={groupText}className="flex flex-col pointer-events-none justify-around w-1/2">
                <h1 ref={physicsRef} className="text-center text-6xl">
                    The Three Body Problem
                </h1>
                <p ref={textRef} className="text-4xl text-center m-5 h-full flex items-center">
                    Inspired through Cixin Liu's movies like the Wandering Earth I & II as well as his novel series which is the Remembrance of Earth's Past trilogy, including my favorite books of all time, The Three Body Problem, The Dark Forest, and The Death's End.
                </p>
            </div>
            <div ref={buttonRef} className="absolute group w-[10%] z-30 h-[90vh] right-0 overflow-hidden">
                <button  onClick ={handleClick} className={clsx("absolute h-25  w-25 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full ", expanded ? "transition-transform duration-300 ease-out -translate-x-[155%] group-hover:translate-x-[0%]" : " transition-transform duration-300 ease-out translate-x-full group-hover:-translate-x-1/2")}>-</button>
            </div>
            
            <div ref={demoRef} className="absolute flex left-[32.5%] opacity-0 top-[20%] h-[80%] ">
                <video src="/Portfolio-Website/3bp.mp4" className="w-full max-w-xl h-auto" controls type="video/mp4"/>
            </div>
            
            <div ref={canvasRef} className="relative flex flex-col items-center justify-around z-25 w-1/2 h-[90%] bg-transparent">
                <div className="flex flex-col justify-around h-[100%] w-[45%]">
                    <Tiltcard className="transition-transform duration-500 ease-out hover:scale-110">
                        <img src="/Portfolio-Website/3bp.jpg"/>
                    </Tiltcard>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cheemsisherenow/Physics.py"className="px-16 py-8 rounded-md text-2xl bg-[#034567]"> GitHub Link </a>
                
            </div>
        </div>
        
       
    </div>
  )
}

export default Physics