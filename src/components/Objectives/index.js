import { CardObjectives } from "../CardObjectives"
import { H2, View } from "./styles"
import img1 from "../../assets/objectives-img1.png"
import img2 from "../../assets/objectives-img2.png"
import img3 from "../../assets/objectives-img3.png"
import img4 from "../../assets/objectives-img4.png"
import { Container } from "../../styles/global"

export const Objectives = () =>{
    return(
        <View>
            <H2>Objetivos</H2>
            <Container 
                direction={"row"}
                gap={"1.5rem"}
            >
                <CardObjectives
                    img={img1}
                    title={"Ganho de Massa"}
                />
                <CardObjectives
                    img={img2}
                    title={"Energia"}
                />
                <CardObjectives
                    img={img3}
                    title={"Recuperação Muscular"}
                />
                <CardObjectives
                    img={img4}
                    title={"Emagrecimento"}
                />
            </Container>
        </View> 
    )
}