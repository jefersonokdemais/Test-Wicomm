import { Container, H2, View } from "./styles"
import imagem from "../../assets/logo 2.png"

export const About = () =>{
    return(
        <View>
            <Container>
                <img src={imagem} alt="Logotipo em mascara"/>
                <H2>Sobre a Black Skull</H2>
                <span> 
                    A Black Skull USA é uma marca de suplementos alimentares com foco em atletas de alta performance. 
                    Nossa sede no Brasil está alocada em Embu das Artes – SP, com mais de 12.000 m² de área construída, 
                    com alta capacidade produtiva. Nossos produtos trabalham com as melhores matérias-primas do mercado 
                    e tem como principal característica maior concentração de insumos, que proporcionam níveis de pureza 
                    mais altos e por consequência otimizam a qualidade de nossos produtos.
                </span>
            </Container>
        </View>
    )
}