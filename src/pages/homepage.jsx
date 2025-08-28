import NavBar from "../components/common/navBar"
import INFO from "../data/user"
import Toolbox from "../components/common/toolbox"

export default function Homepage(){
    return(
        <>
        <span>
            <h1 className="homepage-title">{INFO.homepage.title + " " + INFO.homepage.highlight}</h1>
            <p className="homepage-description">{INFO.homepage.description}</p>
        </span>
        <span>
            <Toolbox/>
        </span>

        <hr/>
        
        </>
    )
}