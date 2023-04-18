import { BoxIcons, Buttom, Column1, ColumnLinks, ColumnMarketingNoticies, InsideView, PaymentsIcons, View } from "./styles"
import logo from "../../assets/Logo.png"
import { FaFacebook } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {Container} from "../../styles/global"
import icon1 from "../../assets/Icons-Cards1.png"
import icon2 from "../../assets/Icons-Cards2.png"
import "./styles.css"

export const PreFooter = () =>{ 
    return(
        <View>
            <Container width="1200px" direction="row">
                <Column1>
                    <img src={logo} alt="Logotipo"/>
                    <span>Nos siga:</span>
                    <div className="rede-sociais">
                        <FaFacebook size="1.5rem" color="white"/>
                        <BsInstagram size="1.5rem" color="white"/>
                        <AiFillYoutube size="1.5rem" color="white"/>
                        <AiFillTwitterCircle size="1.5rem" color="white"/>
                        <FaTiktok size="1.5rem" color="white"/>
                    </div>
                </Column1>
                <InsideView>
                    <Container direction="row">
                        <ColumnLinks>
                            <h3>Blackskull usa</h3>
                            <div className="links">
                                <a>Sobre nós</a>
                                <a>Back Skull é confiável?</a>
                                <a>Atletas Black Skull</a>
                                <a>Nosso Blog</a>
                                <a>Seja um Revendendor</a>
                                <a>Entre em Contato</a>
                            </div>
                        </ColumnLinks>
                        <ColumnLinks>
                            <h3>Institucional</h3>
                            <div className="links">
                                <a>Trocas e Devoluções</a>
                                <a>Politica de Entregas</a>
                                <a>Política de Privacidade</a>
                                <a>Política de Cancelamentos</a>
                            </div>
                        </ColumnLinks>
                        <ColumnLinks>
                            <h3>Afiliados</h3>
                            <div className="links">
                                <a>Programa de Afiliados</a>
                                <a>Desconto para Militares</a>
                                <a>Benefícios para Profissionais da Saúde</a>
                                <a>Benefícios para Profs. de Educação Fisica</a>
                                <a>Assinaturas</a>
                            </div>
                        </ColumnLinks>
                    </Container>
                    <PaymentsIcons>
                        <BoxIcons>
                            <h5>Formas de pagamento</h5>
                            <img src={icon1} alt="Logotipos Bandeiras de Cartões"/>
                        </BoxIcons>
                        <BoxIcons>
                            <h5>Segurança</h5>
                            <img src={icon2} alt="Logotipos Bandeiras de Cartões" id="img2"/>
                        </BoxIcons>
                    </PaymentsIcons>
                </InsideView>
                <ColumnMarketingNoticies>
                    <h3>Fique por <span>dentro</span></h3>
                    <span>Inscreva-se e seja o primeiro a saber sobre muitas as novidades, promoções e muito mais!</span>
                    <input placeholder="Digite seu nome" className="pre-input"/>
                    <input placeholder="Digite seu email" className="pre-input"/>
                    <Buttom>Enviar</Buttom>
                </ColumnMarketingNoticies>
            </Container>
        </View>
    )
}