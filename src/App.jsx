import { useState, useContext } from 'react'
import { Main } from './pages/main/Main'
import { Projects } from './pages/projects/Projects'
import { Connect } from './pages/connect/Connect'
import { Career } from './pages/career/Career'

import { AppContext } from './context'

import './App.css'
import { Layout } from './layout'

const decideSection = (section) => {
  switch (section) {
    case 0:
      return <Main />
    case 1:
      return <Career />
    case 2:
      return <Projects />
    default:
      return <Connect />
  }
}

function App() {
  const [section, setSection] = useState(0)
  return (
    <div class="container">
      <AppContext.Provider value={{ section, setSection }}>
        <Layout>
          {decideSection(section)}
        </Layout>
      </AppContext.Provider>
    </div>
  )
}

export default App
