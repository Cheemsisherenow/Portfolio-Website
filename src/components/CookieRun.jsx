import {React, useState, Suspense, useRef} from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap/all'
import { Html, Center, PresentationControls } from '@react-three/drei'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame } from '@react-three/fiber'
import Bot from './models/Bot2'
import Lights from './Light'
import clsx from 'clsx'
import Tiltcard from './Tilecard'
gsap.registerPlugin(ScrollTrigger)


const CookieRun = () => {
    const [load, setLoad] = useState(false);
    const [canvasReady, setCanvasReady] = useState(false);
    const [expanded, setExpanded] = useState(false)
    const groupRef = useRef(null);
    const groupText = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);
    const cookieRef = useRef(null);
    const textRef = useRef(null)
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)
    
    useGSAP(()=>{
        
        ScrollTrigger.create({
                    trigger: '#cookieRun',
                    start: 'top 80%', 
                    once: true,      
                  })
        const tl3 = gsap.timeline({
            scrollTrigger: {
            trigger: "#cookieRun",
            start: "top 50%",
            end: "top 20%", 

            }
        })
        tl3.from(cookieRef.current, { y: 100, opacity: 0 })
        .from(textRef.current, { y: 100, opacity: 0, delay:.1 },"<")
        .from(canvasRef.current, { y: 100, opacity: 0, delay:.1 }, "<")
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
},[])
  return (
    <div id="cookieRun" className="relative w-screen h-[105vh] bg-[#072a43] overflow-hidden">
        
        
        <div className="relative w-screen h-[90vh] flex justify-between rounded-3xl backdrop-blur-md bg-opacity-20 bg-black/5 border p-4">
            <div ref={groupText}className="flex flex-col pointer-events-none justify-around w-1/2">
                <h1 ref={cookieRef} className="text-center text-6xl">
                    Cookie Run Kingdom
                </h1>
                <p ref={textRef} className="text-4xl text-center m-5 h-full flex items-center">
                    This was my first attempt at web development, utilizing basic HTML, CSS, and Javascript, with over 1000+ lines of code, serving as a foundation and checkpoint for my coding career.
                </p>
            </div>
            <div ref={canvasRef} className="relative flex flex-col items-center z-25 w-1/2 h-[90%] bg-transparent">
                <div className="flex flex-col justify-around h-[100%] w-[80%]">
                    <img src="/Portfolio-Website/cookie.png"/>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://codehs.com/sandbox/id/cookie-run-clicker-UauP6h" className="px-16 py-8 rounded-md text-2xl bg-[#034567]"> Website Link </a>
            </div>
        </div>
        
       
    </div>
  )
}

export default CookieRun
