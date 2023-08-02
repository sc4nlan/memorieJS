import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainContainer({ children }){
    return(
        <>
            <div>
                <Navbar/>
                <div className="container mx-auto px-5">{children}</div>
                <Footer/>
            </div>
        </>
    )
}