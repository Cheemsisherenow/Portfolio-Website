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


const Robotics = () => {
    const [load, setLoad] = useState(false);
    const [canvasReady, setCanvasReady] = useState(false);
    const [expanded, setExpanded] = useState(false)
    const groupRef = useRef(null);
    const groupText = useRef(null);
    const cardRef = useRef(null);
    const roboticsRef = useRef(null);
    const textRef = useRef(null)
    const canvasRef = useRef(null)
    const buttonRef = useRef(null)
    useGSAP(() => {
        if (cardRef.current) {
            gsap.set(cardRef.current, { opacity: 0, y: "100%" });     
        }
    }, [cardRef])
    const handleClick = () => {
        const tl = gsap.timeline()
        if (!expanded) {
          tl.to(textRef.current, { opacity: 0, y: "100%", duration: 1 , onComplete: () => {textRef.current.textContent = "I also made the First Robotics Website for our team which I am still working on as the robotic season continues."}})
          .to(canvasRef.current, { y: "100%", opacity: 0, duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '-900%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(groupText.current, {x:"100%", duration: 1, ease: "power3.inOut"}, '<')
          .to(textRef.current, { opacity: 1, y: "0%", duration: 1, })
          .to(cardRef.current, {y:"0%", opacity: 1, duration: 1, ease: "power3.inOut"}, "<")
          
        } else {
          tl.to(textRef.current, { opacity: 0, y: "100%", duration: 1, onComplete: () => {textRef.current.textContent = "I'm a member of First Robotics team 3318 and along with many other members, we are participating this year's game, REBUILT. On the team, I am responsible for the Computer Aided Design (CAD) as well as mechanical and programming."}})
          .to(canvasRef.current, {y: "0%", opacity: 1,  duration: 1, ease: 'power3.inOut' }, '<')
          .to(buttonRef.current, { x: '0%', duration: 1, ease: 'power3.inOut' }, '<')
          .to(groupText.current, {x:"0%", duration: 1, ease: "power3.inOut"}, '<')
          .to(cardRef.current, {y:"100%", opacity: 0, duration: 1, ease: "power3.inOut"}, "<")
          .to(textRef.current, { opacity: 1, y: "0%", duration: 1, })
          
        }
        setExpanded(!expanded)
        }
    useGSAP(()=>{
        
        ScrollTrigger.create({
                    trigger: '#projectTitle',
                    start: 'top 80%', 
                    once: true,      
                    onEnter: () => {
                      console.log('Loading 3D model...')
                      setLoad(true)
                    }
                  })
        const tl2 = gsap.timeline({
            scrollTrigger: {
            trigger: "#projectTitle",
            start: "top 50%",
            end: "top 20%", 

            }
        })
        tl2.from(roboticsRef.current, { y: 100, opacity: 0 })
        .from(textRef.current, { y: 100, opacity: 0, delay:.1 },"<")
        .from(canvasRef.current, { y: 100, opacity: 0, delay:.1 }, "<")
        
            gsap.from("#projectTitle", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#projectTitle",
              start: "top 70%",
              toggleActions: "play none none reverse",
            }
          });
          gsap.to("#line2",{
            scaleX: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#line2",
                start: "top 70%",
                end: "top 40%",
                toggleActions: "play none none reverse",
                scrub: true
            }
          })
          return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
},[])
  return (
    <div id="robotics" className="relative w-screen h-[125vh] bg-[#072a43] overflow-hidden">
        <hr className="h-1 border-0 bg-gradient-to-r from-transparent via-[#5692aa] to-transparent blur-[5px] shadow-[0_0_12px_rgba(34,211,238,0.9),0_0_30px_rgba(34,211,238,0.6)]"/>
        <div className="w-full flex justify-center mt-[5%]">
            <div id="projectTitle" className="absolute inline-block text-7xl whitespace-nowrap z-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
                My Projects
                <div id="line2" className="h-[3px] mt-2 w-full origin-left scale-x-0 bg-gradient-to-r from-white via-[#5692aa] to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]"/>
            </div>
        </div>
        
        <div className="relative w-screen h-[90vh] mt-[7%] flex justify-between rounded-3xl backdrop-blur-md bg-opacity-20 bg-black/5 border p-4">
            <div ref={groupText}className="flex flex-col pointer-events-none justify-around w-1/2">
                <h1 ref={roboticsRef} className=" text-center">
                    First Robotics Competitions
                </h1>
                <p ref={textRef} className="text-4xl text-center m-5 h-full flex items-center">
                    I'm a member of First Robotics team 3318 and along with many other members, we are participating this year's game, REBUILT. On the team, I am responsible for the Computer Aided Design (CAD) as well as mechanical and programming.
                </p>
            </div>
            <div ref={buttonRef} className="absolute group w-[10%] z-30 h-[90vh] right-0 overflow-hidden">
                <button  onClick ={handleClick} className={clsx("absolute h-25  w-25 top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full ", expanded ? "transition-transform duration-300 ease-out -translate-x-[155%] group-hover:translate-x-[0%]" : " transition-transform duration-300 ease-out translate-x-full group-hover:-translate-x-1/2")}>{expanded ? "←":"→"}</button>
            </div>
            <div ref={cardRef} className="absolute flex flex-col gap-[40%] left-[10%] top-[17.5%] h-[35%] w-[35%]">
                <Tiltcard>
                    <img src="/Portfolio-Website/FRCweb.png" alt="FRC"/>
                </Tiltcard>
                <a target="_blank" rel="noopener noreferrer" href="https://cheemsisherenow.github.io/3318-Website/"className="text-3xl px-16 py-8 rounded-md bg-[#034567]">Website Link</a>
            </div>
            
            <div ref={canvasRef} className="relative flex flex-col items-center z-25 w-1/2 h-[90%] bg-transparent">
                <Canvas onCreated={() => setCanvasReady(true)}>
                    <Suspense fallback={<Html><h1 className ="text-white text-3xl uppercase">Loading...</h1></Html>}>
                        <PresentationControls {...{snap: true, speed: 1, zoom: 1, polar: [-Math.PI,Math.PI],  azimuth: [-Infinity, Infinity], config: {mass: 1, tension: 0, friction: 26}}}>
                            <group ref={groupRef}>
                                {load && (<Center> <Bot scale={5.5} position={[0,0,0]} rotation={[0, -Math.PI/5, 0]}/> </Center>)}
                                
                                <directionalLight
                                position={[10, 10, 10]}
                                intensity={.3}
                                castShadow
                                shadow-mapSize-width={2048}
                                shadow-mapSize-height={2048}
                            />
                            <Lights/>
                            
                            </group>
                        </PresentationControls>
                    </Suspense>
                </Canvas>
                <a target="_blank" rel="noopener noreferrer" href="https://cad.onshape.com/documents/ec75a4a754086b81a364029b/w/0da77971edc950bba697877f/e/8c51ced8b74200e9c8717fe4" className="px-16 py-8 rounded-md text-2xl bg-[#46ae56]"> CAD Document </a>
            </div>
        </div>
        
       
    </div>
  )
}

export default Robotics
