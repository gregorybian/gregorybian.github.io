import NavBar from "../components/common/navBar"
import AllExperiences from "../components/common/allExperiences"
import Footer from "../components/common/footer"
import "./styles/experience_page.css"

export default function ExperiencePage(){
    return(
        <>
        <div className="page-content">
        <NavBar active="experiencePage"/>
        <div className="content-wrapper">
            <div className="experience-page-container">
                <div className="experience-page-header">
                    <div className="highlight experience-page-highlight">
                        Experiences 
                    </div>
                    <div className="title experience-page-title">
                        that fuel my 
                    </div>
                    <div className="highlight experience-page-highlight">
                        Passion!
                    </div>
                    <div className="subtitle experience-page-subtitle">
                        Here's a summary of my professional journey and key experiences
                    </div>
                </div>
                <div className="experience-content">
                    <AllExperiences/>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        
        </>
    )
}