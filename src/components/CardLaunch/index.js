import { CardContent, DescriptionCard } from "./styles"
import { HiOutlineStar } from "react-icons/hi"
import  { BsCart3 } from "react-icons/bs"
import "./styles.css"

export const CardLaunch = ({title, img, value}) =>{
    return(
        <CardContent>
            <img src={img} alt="Frasco com produto" id="img"/>
            <HiOutlineStar className="react-icons"/>
            <BsCart3 className="react-icons"/>
            <DescriptionCard>
                <h4>{title}</h4>
                <h3>R$ {value}0</h3>
                <span>ou 12x de R$ {Math.round((349.90/12)*100)/100}</span>
            </DescriptionCard>
        </CardContent>
    )
}