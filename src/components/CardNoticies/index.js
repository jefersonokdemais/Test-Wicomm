import { Button, CardContent, DescriptionCard } from "./styles"

export const CardNoticies = ({title, img, date}) =>{
    return(
        <CardContent>
            <img src={img} alt="Imagem da postagem do blog" className="img"/>
            <DescriptionCard>
                <span>{date}</span>
                <h4>{title}</h4>
                <Button>Ler mais</Button>
            </DescriptionCard>
        </CardContent>
    )
}