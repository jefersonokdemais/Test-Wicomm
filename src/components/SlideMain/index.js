import img1 from "../../assets/galery-img1.png"
import { Container } from "../../styles/global"
import { Button, H1, NavToContact, NavToHome, P, Slide } from "./styles"
import { MdTextsms } from "react-icons/md"

export const SlideMain = () =>{
    return(
        <Slide img={img1}>
            <Container width="1200px">
                <H1>Ajudando você a ter <span>mais performance</span></H1>
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</P>
                <Button>Confira</Button>
                <NavToHome href="#home"> ^ </NavToHome>
                <NavToContact href="#contact"> <MdTextsms/> Fale Conosco</NavToContact>
            </Container>
        </Slide>
    )
}