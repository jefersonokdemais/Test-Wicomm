import { CardContent } from "./styles"
import "./styles.css"

export const Card = ({title, img}) =>{
    return(
        <CardContent>
            <div className="card-circle">
                <img src={img} alt="Frasco com produto" id="img"/>
            </div>
            <h3>{title}</h3>
        </CardContent>
    )
}