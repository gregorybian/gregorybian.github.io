import NavBar from "../components/common/navBar"
import INFO from "../data/user"
import Toolbox from "../components/common/toolbox"
import "./styles/Homepage.css"

export default function Homepage(){
    return(
        <>
            <div className="page-content">
                <NavBar active="homepage"/>
                <div className="content-wrapper">
                    <div className="homepage-container">
                        <div className="homepage-firstpart">
                            <div className="homepage-firstpartleft">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                </div>
                                <div className="title homepage-highlight" color="pink">
                                    {INFO.homepage.highlight}
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                            </div>

                            <div className="homepage-firstpartright">
                                <Toolbox/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}