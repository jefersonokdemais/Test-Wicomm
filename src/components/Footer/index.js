import { View } from "./styles"
import img1 from "../../assets/Logo-Wicomm.png"
import img2 from "../../assets/logo-VTEX.png"

export const Footer = () =>{
    return(
        <View>
            <span>Black Skull 2022. Todos os direitos reservados.</span>
            <div className="logos">
                <img src={img1} alt="logotipo Parceiros"/>
                <img src={img2} alt="logotipo Parceiros"/>
            </div>
        </View>
    )
}