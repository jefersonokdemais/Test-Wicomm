import { Container } from "../../styles/global"
import { Block, Buttom, Description, DivIcon, H2, View } from "./styles"
import { BsBoxSeam } from "react-icons/bs"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import "./styles.css"

export const Security = () =>{
    return(
        <Container width="1200px">
            <View>
            <Block>
                <Description>
                    <H2>Garanta o <span>frete grátis</span></H2>
                    <Buttom>Consulte</Buttom>
                </Description>
                <DivIcon>
                    <BsBoxSeam className="segurity-icon"/>
                </DivIcon>
            </Block>
            <Block>
                <Description>
                    <H2>Seu dinheiro <span>de volta</span></H2>
                    <Buttom>Entenda</Buttom>
                </Description>
                <DivIcon>
                    <RiMoneyDollarCircleLine className="segurity-icon"/>
                </DivIcon>
            </Block>
            </View>
        </Container>
    )
}