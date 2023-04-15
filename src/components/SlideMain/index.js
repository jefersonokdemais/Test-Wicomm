import img1 from "../../assets/galery-img1.png"
import { Container } from "../../styles/global"
import { Button, H1, P, Slide } from "./styles"

export const SlideMain = () =>{
    return(
        <Slide img={img1}>
            <Container width={"1460px"}>
                <H1>Ajudando você a ter <span>mais performance</span></H1>
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</P>
                <Button>Confira</Button>
            </Container>
        </Slide>
    )
}