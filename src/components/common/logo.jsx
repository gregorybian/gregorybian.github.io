import "./styles/logo.css"


export default function Logo(props){
    return(
    <div className="image-container">
        <img className="toolbox-image" src={props.src} alt="logo" />
        <div className="hover-text">{props.text}</div>
    </div>
    )
}