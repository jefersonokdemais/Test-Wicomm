import { Category } from "../components/Category"
import { Launch } from "../components/Launch"
import { Members } from "../components/Members"
import { Navbar } from "../components/Navbar"
import { SlideMain } from "../components/SlideMain"

const Wicomm = () => {
    return(
        <>  
            <Navbar/>
            <SlideMain/>
            <Category/>
            <Launch/>
            <Members/>
        </>
    )
}

export default Wicomm