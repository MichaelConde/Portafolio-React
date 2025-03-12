import { Header } from "./layout/Header/Header"

import { Home } from "./Pages/Home/Home"

import { Studies } from "./Pages/Studies/Studies"

import { SocialAbilities } from "./Pages/SocialAbilities/SocialAbilities"

import { Skills } from "./Pages/Skills/Skills"

import { ProfesionalExperience } from "./Pages/ProfesionalExperience/ProfesionalExperience"



import { Footer } from "./layout/Footer/Footer"

import { Routes, Route } from "react-router-dom"


export const App = () => {
  return (
    <>

      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Studies" element={<Studies />} />
      <Route path="/SocialAbilities" element={<SocialAbilities />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/ProfesionalExperience" element={<ProfesionalExperience />} />
      <Route path="/https://github.com/MichaelConde/Cards-Dom/tree/main"  />
      </Routes>
      <Footer />
      
      </>
  )
}
