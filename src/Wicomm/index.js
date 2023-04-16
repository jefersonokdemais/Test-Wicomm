import { Category } from "../components/Category"
import { Launch } from "../components/Launch"
import { Members } from "../components/Members"
import { Navbar } from "../components/Navbar"
import { Notices } from "../components/Notices"
import { SalesDiscount } from "../components/SalesDiscount"
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
        </>
    )
}

export default Wicomm