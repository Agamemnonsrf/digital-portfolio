import { useState, useContext } from 'react'
import { Main } from './pages/main/Main'
import { Projects } from './pages/projects/Projects'
import { Connect } from './pages/connect/Connect'
import { Career } from './pages/career/Career'

import { AppContext } from './components/context'

import './App.css'
import { Layout } from './layout'


function App() {
  const [section, setSection] = useState(0)
  const [colorMode, setColorMode] = useState('dark')

  return (
    <div className="container">
      <AppContext.Provider value={{ section, setSection, colorMode, setColorMode }}>
        <Layout>
          <MainPage section={section} color={colorMode} />
          <CareerPage section={section} />
          <ProjectsPage section={section} />
          <ConnectPage section={section} />
        </Layout>
      </AppContext.Provider>
    </div>
  )
}

const MainPage = ({ section, color }) => {
  const isCurrentSection = section === 0

  return (
    <>
      <div className={`${isCurrentSection ? 'current-section' : ""} section`} style={{
        background: color === 'light' ? "linear-gradient(103deg, #FFF 17.75%, #A6D9E5 100%)" : "linear-gradient(103deg, #000 17.75%, #052B35 100%)",
        mixBlendMode: color === 'light' ? "lighten" : "darken", width: "100%", height: "100%", top: "0", left: "0"
      }}>
      </div>
      <Main />
    </>
  )
}

const CareerPage = ({ section }) => {
  const isCurrentSection = section === 1

  return (
    <div className={`${isCurrentSection ? 'current-section' : ""} section`}>
      <Career />
    </div >
  )
}

const ProjectsPage = ({ section }) => {
  const isCurrentSection = section === 2

  return (
    <div className={`${isCurrentSection ? 'current-section' : ""} section`}>
      <Projects />
    </div >
  )
}

const ConnectPage = ({ section }) => {
  const isCurrentSection = section === 3

  return (
    <div className={`${isCurrentSection ? 'current-section' : ""} section`}>
      <Connect />
    </div >
  )
}

export default App
