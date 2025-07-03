import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import styles
import './styles/variables.css'
import './styles/Global.css'
import './styles/components/Shared.css'

// Import components and pages
import { Header, Footer, Chatbot } from './components'
import { 
  HomePage, 
  AboutPage, 
  ContactPage,
  StructuralDesignPage,
  StructuralAnalysisPage,
  DraftingServicesPage,
  SiteSupervisionPage,
  StructuralAuditPage
} from './pages'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/structural-design" element={<StructuralDesignPage />} />
          <Route path="/services/structural-analysis" element={<StructuralAnalysisPage />} />
          <Route path="/services/drafting-services" element={<DraftingServicesPage />} />
          <Route path="/services/site-supervision" element={<SiteSupervisionPage />} />
          <Route path="/services/structural-audit" element={<StructuralAuditPage />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
