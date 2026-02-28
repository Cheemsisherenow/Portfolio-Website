import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Sunring = (props) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.material.emissiveIntensity =
      1.8 + Math.sin(clock.elapsedTime * 2) * 0.2
  })

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        emissive="orange"
        transparent
        opacity={0.35}
      />
    </mesh>
  )
}
export default Sunring
