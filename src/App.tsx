import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import StudentDashboard from './pages/StudentDashboard'
import './styles/animations.css' // Import animations

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <main className="main-content">
              <LandingPage />
              <AboutUs />
              <Contact />
            </main>
          </Layout>
        } />
        <Route path="/student-dashboard" element={
          <Layout>
            <StudentDashboard />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <Contact />
          </Layout>
        } />
      </Routes>
    </>
  )
}