import React from 'react'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import './styles/animations.css' // Import animations

export default function App() {
  return (
    <Layout>
      <main className="main-content">
        <LandingPage />
        <AboutUs />
        <Contact />
      </main>
    </Layout>
  )
}

