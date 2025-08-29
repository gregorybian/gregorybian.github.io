import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage.jsx';
import ProjectsPage from './pages/projects_page.jsx';
import ExperiencePage from './pages/experience_page.jsx';
import ContactPage from './pages/contact_page.jsx'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </div>
  )
}

export default App
