import React from 'react'
import { Environment, Lightformer } from "@react-three/drei"
const Lights = () => {
    return(
        <group name = "lights">
            <Environment resolution={200}>
                <group>
                    <Lightformer
                    form = "rect"
                    intensity={10}
                    position={[-10,5,-5]}
                    scale={10}
                    rotation-y= {Math.PI / 2}
                    castShadow
                    />
                    <Lightformer
                    form = "rect"
                    intensity={10}
                    position={[10,5,-5]}
                    scale={10}
                    rotation-y= {Math.PI / 2}
                    castShadow
                    />
                </group>
            </Environment>
            {/*<spotLight
                position={[0,15,5]}
                angle = {.15}
                decay = {0}
                intensity={Math.PI *.2}
            /> */}
        </group>
    )
}
export default Lights