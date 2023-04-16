import { Button, H2, View } from "./styles"
import { Container } from "../../styles/global"
import img1 from "../../assets/members-img1.png"
import img2 from "../../assets/members-img2.png"
import img3 from "../../assets/members-img3.png"

export const Members = () =>{
    return (
        <View>
            <Container width="1300px">
                <H2>Conheça a tropa <span>Black Skull</span></H2>
                <Container direction={"row"} gap={".8rem"}>
                    <img src={img1} alt="foto de atleta de musculação"/>
                    <img src={img2} alt="foto de atleta de musculação"/>
                    <img src={img3} alt="foto de atleta de musculação"/>
                </Container>
            </Container>
            <Button>Ver todos</Button>
        </View>
    )
}