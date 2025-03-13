import { Header } from "./layout/Header/Header"

import { Home } from "./Pages/Home/Home"

import { Studies } from "./Pages/Studies/Studies"

import { SocialAbilities } from "./Pages/SocialAbilities/SocialAbilities"

import { Skills } from "./Pages/Skills/Skills"

import { ProfesionalExperience } from "./Pages/ProfesionalExperience/ProfesionalExperience"
import { EnglishLevel } from "./Pages/EnglishLevel/EnglishLevel"


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
      <Route path="/EnglishLevel" element={<EnglishLevel />} />
      <Route path="/https://michaelconde.github.io/Api-Rick-and-Morty-JS/"  />
      <Route path="/https://michaelconde.github.io/Proyecto-Atlas/"  />
      <Route path="/https://michaelconde.github.io/Reproductor-js/"  />
      <Route path="/https://github.com/MichaelConde/Encapsulaci-n-Java"  />
      </Routes>
      <Footer />
      
      </>
  )
}
