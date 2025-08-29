import "./styles/toolbox.css"
import INFO from "../../data/user"

export default function Toolbox(){
    return(
        <>
            <div className="toolbox-container">
                <div className="toolbox-first">
                    <h4 className="toolbox-title">My Digital Toolbox</h4>
                </div>
                <h5 className="toolbox-subtitle">Web Development</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-image-container">
                    <img className="toolbox-image" src={INFO.toolbox.html}/>
                    <img className="toolbox-image" src={INFO.toolbox.css}/>
                    <img className="toolbox-image" src={INFO.toolbox.javascript}/>
                    <img className="toolbox-image" src={INFO.toolbox.typescript}/>
                    <img className="toolbox-image" src={INFO.toolbox.react}/>
                    <img className="toolbox-image" src={INFO.toolbox.nodejs}/>
                    <img className="toolbox-image" src={INFO.toolbox.nextjs}/>
                    <img className="toolbox-image" src={INFO.toolbox.tailwing}/>
                </div>
                <h5 className="toolbox-subtitle">Data and Computation</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-webdev">

                </div>
                <h5 className="toolbox-subtitle">Hardware and Prototyping</h5>
                <hr className="toolbox-line"></hr>
                <div className="toolbox-webdev">
                    
                </div>
                

                
            </div>
        </>
    )
}