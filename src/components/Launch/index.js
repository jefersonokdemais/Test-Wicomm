import { CardLaunch } from "../CardLaunch"
import { Carrocel, H2, View } from "./styles"
import img1 from "../../assets/launch-img1.png"


export const Launch = () => {
    return(
        <View>
            <H2>Lançamentos</H2>
            <Carrocel>
                <CardLaunch 
                    title={"Whey zero (com lactase) Black Skull - 900g"} 
                    img={img1}
                    value={349.90}
                />
                <CardLaunch 
                    title={"Whey zero (com lactase) Black Skull - 900g"} 
                    img={img1}
                    value={349.90}
                />
                <CardLaunch 
                title={"Whey zero (com lactase) Black Skull - 900g"} 
                img={img1}
                value={349.90}
                />
                <CardLaunch 
                title={"Whey zero (com lactase) Black Skull - 900g"} 
                img={img1}
                value={349.90}
                 />
            </Carrocel>
        </View>
    )
}