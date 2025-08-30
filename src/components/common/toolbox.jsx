import "./styles/toolbox.css"
import Logo from "./logo.jsx"
import INFO from "../../data/user"
import toolbox from "../images/toolbox.png"

export default function Toolbox(){
    return(
        <>
            <div className="toolbox-container">
                <div className="toolbox-first">
                    <img className="toolbox-icon" src={toolbox}/>
                    <h4 className="toolbox-title">My Digital Toolbox</h4>
                </div>
                <h5 className="toolbox-subtitle">Web Development</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-image-container">
                    {INFO.webdev.map((image)=><Logo key={image.key} src={image.url} text={image.name}/>)}
                </div>
                <h5 className="toolbox-subtitle">Data and Computation</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-image-container">
                    {INFO.data.map((image)=><Logo key={image.key} src={image.url} text={image.name}/>)}
                </div>
                <h5 className="toolbox-subtitle">Hardware and Prototyping</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-image-container">
                    {INFO.hardware.map((image)=><Logo key={image.key} src={image.url} text={image.name}/>)}
                </div>
                

                
            </div>
        </>
    )
}