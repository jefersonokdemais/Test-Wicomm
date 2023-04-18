import { Block, Nav } from "./styles"
import { TbTruck } from "react-icons/tb"
import { BiUserCircle, BiSearch } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import { TbShoppingCartX } from "react-icons/tb"
import "./styles.css"
import logo from "../../assets/Logo.png" 
import { Container } from "../../styles/global"

export const Navbar = () => {
    return (
        <Nav>
            <Container id="home">
                <Block height="48px">
                    <a>Fale conosco</a>
                    <div className="text"> 
                        <TbTruck className="icon"/> 
                        <span>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
                    </div>
                    <a>Blog.Blackskull</a>
                </Block>
                <Block height="72px">
                    <img src={logo} alt="logo" id="logo"/>
                    <li>Categorias</li>
                    <li>Vestuário</li>
                    <li>Objetivos</li>
                    <li>Promoçoes</li>
                    <li>Atletas</li>
                    <li>Assinatura</li>
                    <li>
                        <input placeholder="Buscar" id="search"/>
                    </li>
                    <li><BiSearch className="icon-search"/></li>
                    <li><BiUserCircle className="icon"/></li>
                    <li><AiOutlineStar className="icon"/></li>
                    <li>
                        <BsCart3 className="icon"/>
                        {/* <TbShoppingCartX className="icon"/> */}
                    </li>
                </Block>
            </Container>
        </Nav>
    )
}