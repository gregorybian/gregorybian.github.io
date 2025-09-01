import NavBar from "../components/common/navBar"
import Footer from "../components/common/footer"

export default function ContactPage(){
    return(
        <>
        <div className="page-content">
        <NavBar active="contactPage"/>
        <h1>This is the contact page</h1>
        </div>
        <Footer />
        </>
    )
}