import React from 'react'
import {
  Header,
  Hero,
  About,
  Services,
  WhyChooseUs,
  Testimonials,
  Contact,
  Footer,
  Projects
} from '../components'

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default HomePage
