import gsap from "gsap"
import { PresentationControls } from '@react-three/drei'
import Sun1 from '../../public/models/1rd'
import Sun2 from '../../public/models/2nd'
import {React, useRef, useEffect} from 'react'
import Lights from './lights'
import Sunring from '../../public/models/sunring'
import {Bloom, EffectComposer} from "@react-three/postprocessing"
import Sun3 from "../../public/models/3rd"

const SolarSystem = () =>{
  const groupRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    tl.to(groupRef.current.rotation, {
      y: "+=" + Math.PI * 2,
      z: "+=" + Math.PI * 2,
      x: "+=" + Math.PI * 2,
      duration: 60,
      ease: "linear"
    })
  }, [])

  return (
    <group ref={groupRef}>
      <group position={[5, -3, 2]} scale={1.25}>
        <Sun1 />
      </group>
      <group position={[-5, -3, 1]} scale={0.3}>
        <Sun2 />
        <Sunring scale={8.5} />
      </group>
      <group position={[2, 5, -5]} scale={0.15}>
        <Sunring scale={9} />
        <Sun3 />
      </group>
      <Lights />
    </group>
  )
}
export default SolarSystem
