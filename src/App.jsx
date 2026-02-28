// npm install three @react-three/drei @react-three/fiber
// npm install tailwindcss @tailwindcss/vite
// cd ./public/models then do ls
// npx gltfjsx macbook-14.glb -T
import React from "react"
import Front from "./components/Front"
import Header from "./components/Header"
import Robotics from "./components/Robotics"
import Fbla from "./components/Fbla"
import CookieRun from "./components/CookieRun"
import Javafx from "./components/Javafx"
import Physics from "./components/Physics"
import Competitions from "./components/Competitions"

const App = () => {

  return (
    <>
      <Header/>
      <Front/>
      <Robotics/>
      <Fbla/>
      <CookieRun/>
      <Javafx/>
      <Physics/>
      <Competitions/>
    </>
  )
}

export default App
