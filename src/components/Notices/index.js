import { View, H2 } from "./styles"
import { Container } from "../../styles/global"
import img1 from "../../assets/notices-img1.png"
import img2 from "../../assets/notices-img2.jpg"
import img3 from "../../assets/notices-img3.png"
import { CardNoticies } from "../CardNoticies"

export const Notices = () =>{
    return(
        <View>
            <Container width="1780px">
                <H2>Confira <span>o nosso Blog</span></H2>
                <Container direction={"row"} gap={".8rem"}>
                    <CardNoticies
                        date={"03.05.21"}
                        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} 
                        img={img1}
                    />
                    <CardNoticies
                        date={"03.05.21"}
                        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} 
                        img={img2}
                    />
                    <CardNoticies
                        date={"03.05.21"}
                        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "} 
                        img={img3}
                    />
                </Container>
            </Container>
        </View>
    )
}