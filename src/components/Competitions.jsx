import {React, useState, Suspense, useRef} from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap/all'
import { Html, Center, PresentationControls } from '@react-three/drei'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame } from '@react-three/fiber'
import Bot from '../../public/models/Bot2'
import Lights from './Light'
import clsx from 'clsx'
import Tiltcard from './Tilecard'
gsap.registerPlugin(ScrollTrigger)


const Competitions = () => {
    const [load, setLoad] = useState(false);
    const [canvasReady, setCanvasReady] = useState(false);
    const [expanded, setExpanded] = useState(false)
    const groupRef = useRef(null);
    const groupText = useRef(null);
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const competitionRef = useRef(null);
    const textRef = useRef(null)
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)
    useGSAP(() => {
        if (cardRef1.current && cardRef2.current) {
            gsap.set(cardRef1.current, { opacity: 0, y: "100%" });   
            gsap.set(cardRef2.current, { opacity: 0, y: "100%" }); 
            
        }
    }, [cardRef1, cardRef2])
    const handleClick = () => {
        const tl = gsap.timeline()
        if (!expanded) {
          tl.to(textRef.current, { opacity: 0, y: "100%", duration: 1 , })
          .to(canvasRef.current, { y: "100%", opacity: 0, duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '-900%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(competitionRef.current, {x:"50%", duration: 1, ease: "power3.inOut"}, '<')
          
          .to(cardRef1.current, {y:"0%", opacity: 1, duration: .5, ease: "power3.inOut"}, "<")
          .to(cardRef2.current, {y:"0%", opacity: 1, duration: .5, ease: "power3.inOut"}, "-=.5")
        
          
        } else {
          tl.to(cardRef2.current, {y:"100%", opacity: 0, duration: .5, ease: "power3.inOut"})
          .to(cardRef1.current, {y:"100%", opacity: 0, duration: .5, ease: "power3.inOut"}, "+=.1")
          .to(textRef.current, { opacity: 0, y: "100%", duration: 1,})
          .to(canvasRef.current, {y: "0%", opacity: 1,  duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '0%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(competitionRef.current, {x:"0%", duration: 1, ease: "power3.inOut"}, '<')
          .to(textRef.current, { opacity: 1, y: "0%", duration: 1, })
          
        }
        setExpanded(!expanded)
        }
    useGSAP(()=>{
        
        ScrollTrigger.create({
                    trigger: '#competition',
                    start: 'top 80%', 
                    once: true,      
                  })
        const tl3 = gsap.timeline({
            scrollTrigger: {
            trigger: "#competition",
            start: "top 50%",
            end: "top 20%", 

            }
        })
        tl3.from(competitionRef.current, { y: 100, opacity: 0 })
        .from(textRef.current, { y: 100, opacity: 0, delay:.1 },"<")
        .from(canvasRef.current, { y: 100, opacity: 0, delay:.1 }, "<")
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
},[])
  return (
    <div id="competition" className="relative w-screen h-[105vh] bg-[#072a43] overflow-hidden">
        
        
        <div className="relative w-screen h-[90vh] flex justify-between rounded-3xl backdrop-blur-md bg-opacity-20 bg-black/5 border p-4">
            <div ref={groupText}className="flex flex-col pointer-events-none justify-around w-1/2">
                <h1 ref={competitionRef} className="text-center text-6xl">
                    Programming Competitions
                </h1>
                <p ref={textRef} className="text-4xl text-center m-5 h-full flex items-center">
                    I participate in different coding competitions, most of them being algorithmic programming but I also did some traditional Hackathons. Some of these includes USACO (United States Coding Olympiad) and ACSL (American Computer Science League) senior division.
                </p>
            </div>
            <div ref={buttonRef} className="absolute group w-[10%] z-30 h-[90vh] right-0 overflow-hidden">
                <button  onClick ={handleClick} className={clsx("absolute h-25  w-25 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full ", expanded ? "transition-transform duration-300 ease-out -translate-x-[155%] group-hover:translate-x-[0%]" : " transition-transform duration-300 ease-out translate-x-full group-hover:-translate-x-1/2")}>-</button>
            </div>
            
            <div className="absolute flex pt-[10%] left-[10%] justify-around top-[12.5%] h-[60%] w-[90%] ">
            <div ref={cardRef2} className=" flex flex-col gap-[40%] h-full hover:z-20">
                <Tiltcard className="flex z-5 h-full  transition-transform duration-300 ease-out hover:scale-140 hover:translate-x-1/3 hover:z-20">
                    <img src="/Portfolio-Website/codequest2.png" className="h-full" alt="FRC"/>
                    <img src="/Portfolio-Website/codequest.png" className="h-full" alt="FRC"/>
                </Tiltcard>
                
            </div>
            <div ref={cardRef1} className="flex flex-col  gap-[40%] h-full hover:z-20">
                <Tiltcard className="z-5 h-full transition-transform duration-300 ease-out hover:scale-140 hover:-translate-x-1/3 hover:z-20">
                    <img src="/Portfolio-Website/hackG.png" className="h-full" alt="FRC"/>
                </Tiltcard>
                
            </div>
            </div>
            
            <div ref={canvasRef} className="relative flex flex-col items-center z-25 w-1/2 h-[90%] bg-transparent">
                <div className="flex flex-col justify-around h-[100%] w-[60%]">
                    <Tiltcard className="transition-transform duration-300 ease-out hover:scale-150">
                        <img src="/Portfolio-Website/usaco.png" alt="FRC"/>
                    </Tiltcard>
                    <Tiltcard className="transition-transform duration-300 ease-out hover:scale-150">
                        <img src="/Portfolio-Website/acsl.png" alt="FRC"/>
                    </Tiltcard>
                </div>
            </div>
        </div>
        
       
    </div>
  )
}

export default Competitions
