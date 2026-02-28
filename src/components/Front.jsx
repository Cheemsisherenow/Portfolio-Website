import { Canvas } from '@react-three/fiber'
import Lights from './Light'
import {Bloom, EffectComposer} from "@react-three/postprocessing"
import SolarSystem from './SolarSystem'
import Stars from './Stars'
import React from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap/all'

const Front = () => {
    useGSAP(()=>{        
        const tl = gsap.timeline()
        tl.from("#title", {
            y:200,
            delay: 1,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
        }).from("#subtitle", {
            y:200,
            opacity: 0,
            ease: "power3.out",
            duration: .8
        }).to("#line1",{
            scaleX: 1,
            ease: "power3.out",
            delay: .4,
            duration: 1.5
        },"<")
    })


  return (
    <div id="intro">
        <div className="w-screen h-screen bg-[#072a43]">
        <Stars/>
        <p id = "title" className="absolute top-[45%] left-1/2 -translate-x-1/2 z-50 w-full flex justify-center -translate-y-1/2"> Hi! I'm Zihong Chen </p>
        <div id="subtitle" className="absolute inline-block text-3xl whitespace-nowrap z-50 top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            Welcome! This is my portfolio website.
            <div id="line1" className="h-[3px] mt-1 w-full origin-left scale-x-0 bg-gradient-to-r from-white via-[#5692aa] to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]"/>
        </div>
        <Canvas className="pointer-events-none bg-transparent">
            <SolarSystem/>
            <Lights/>
            <EffectComposer>
                <Bloom intensity={.05} luminanceThreshold={0} luminanceSmoothing={0.9}/>
            </EffectComposer>
        </Canvas>
        </div>
    </div>
  )
}

export default Front
