import { CardContent, Legend, H4} from "./styles"

export const CardObjectives = ({title, img}) =>{
    return(
        <CardContent>
            <img src={img} alt="Imagem da postagem do blog" className="img"/>
            <Legend>
                <H4>{title}</H4>
            </Legend>
        </CardContent>
    )
}