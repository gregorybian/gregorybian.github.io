import { Routes, Route } from "react-router-dom";
import './App.css';
import AllProjects from "./components/projects/allProjects";
import NavBar from "./components/common/navBar";
import Homepage from './pages/homepage.jsx';
import ProjectsPage from './pages/projects_page.jsx';


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  )
}

export default App
