import { Routes, Route } from "react-router-dom";
import './App.css';
import ScrollToTop from './components/common/ScrollToTop';
import Homepage from './pages/homepage.jsx';
import ProjectsPage from './pages/projects_page.jsx';
import ExperiencePage from './pages/experience_page.jsx';
import ContactPage from './pages/contact_page.jsx'
import ProjectInfo from './pages/project_info_pages/projectinfo.jsx'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
		<Route path="/projects" element={<ProjectsPage />} />
		<Route path="/experience" element={<ExperiencePage />} />
		<Route path="/contact" element={<ContactPage />} />
		<Route path="/projects/:slug" element={<ProjectInfo />}/>
      </Routes>
    </div>
  )
}

export default App
