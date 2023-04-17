import { View } from "./styles"
import { Card } from "../CardCategory"
import img1 from "../../assets/category-img1.png"
import { Container } from "../../styles/global"

export const Category = () => {
    return(
        <View>
            <Container direction={"row"} gap={"2rem"}>
                <Card title="Proteínas" img={img1} />
                <Card title="Hipercalóricos" img={img1} />
                <Card title="Creatina" img={img1} />
                <Card title="Packs" img={img1} />
                <Card title="Aminoácidos" img={img1} />
                <Card title="Saúde" img={img1} />
            </Container>
        </View>
    )
}