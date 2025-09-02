import NavBar from "../components/common/navBar"
import Footer from "../components/common/footer"
import INFO from "../data/user"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"
import "./styles/contact_page.css"

export default function ContactPage(){
    return(
        <>
        <div className="page-content">
            <NavBar active="contactPage"/>
            <div className="content-wrapper">
                <div className="contact-page-container">
                    <div className="contact-header">
                        <div className="title contact-title">
                            Let's 
                        </div>
                        <div className="highlight contact-title">
                            {" Connect!."}
                        </div>
                        <div className="subtitle contact-subtitle">
                            I am free for work, projects, or just to chat
                        </div>
                    </div>
                    
                    <div className="contact-content">
                        <div className="contact-description">
                            <p>
                                Whether you have a project in mind, want to discuss potential opportunities, 
                                or just want to connect and chat about technology, I'd love to hear from you!
                            </p>
                        </div>
                        
                        <div className="socials-section">
                            <h3 className="socials-title">Find me on:</h3>
                            <div className="socials-grid">
                                <a href={INFO.socials.github} target="_blank" rel="noopener noreferrer" className="social-card">
                                    <div className="social-icon">
                                        <FaGithub />
                                    </div>
                                    <div className="social-info">
                                        <h4>GitHub</h4>
                                        <p>Check out my projects and contributions</p>
                                    </div>
                                </a>
                                
                                <a href={INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-card">
                                    <div className="social-icon">
                                        <FaLinkedin />
                                    </div>
                                    <div className="social-info">
                                        <h4>LinkedIn</h4>
                                        <p>Connect professionally and view my experience</p>
                                    </div>
                                </a>
                                
                                <a href={INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-card">
                                    <div className="social-icon">
                                        <FaInstagram />
                                    </div>
                                    <div className="social-info">
                                        <h4>Instagram</h4>
                                        <p>Follow my journey and behind-the-scenes</p>
                                    </div>
                                </a>
                                
                                <a href={`mailto:${INFO.socials.email}`} className="social-card">
                                    <div className="social-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="social-info">
                                        <h4>Email</h4>
                                        <p>Send me a direct message</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <div className="contact-cta">
                            <p className="cta-text">
                                Don't hesitate to reach out - I'm always excited to hear about new opportunities 
                                and connect with fellow developers and tech enthusiasts!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </div>
        
        </>
    )
}