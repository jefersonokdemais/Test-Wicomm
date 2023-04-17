import { About } from "../components/About"
import { Category } from "../components/Category"
import { Footer } from "../components/Footer"
import { Launch } from "../components/Launch"
import { Members } from "../components/Members"
import { Navbar } from "../components/Navbar"
import { Notices } from "../components/Notices"
import { Objectives } from "../components/Objectives"
import { SalesDiscount } from "../components/SalesDiscount"
import { Security } from "../components/Security"
import { SlideMain } from "../components/SlideMain"

const Wicomm = () => {
    return(
        <>  
            <Navbar/>
            <SlideMain/>
            <Category/>
            <Launch/>
            <Members/>
            <SalesDiscount/>
            <Notices/>
            <Objectives/>
            <Security/>
            <About/>
            <Footer/>
        </>
    )
}

export default Wicomm