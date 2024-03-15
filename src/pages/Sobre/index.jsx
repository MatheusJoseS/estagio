import React from "react";
import NavBar from "../../components/Navbar/index.jsx";
import { TextD, Titulo, TituloD, TituloE, TextE, BlocoD, BlocoE, Dire, Esque, Comteudo } from "./styled.js";

export const Sobre = () => {
  return (
    <>
      <NavBar />
      <Titulo>Sobre</Titulo>
      <Comteudo>
        <Esque>
          <BlocoE>
            <TituloE>Visão Geral do Estágio</TituloE>
            <TextE>O estágio foi realizado em uma empresa líder no setor de tecnologia, proporcionando uma experiência valiosa de [duração do estágio]. Durante esse período, fui incumbido de uma variedade de responsabilidades, trabalhando em estreita colaboração com uma equipe talentosa e dedicada.</TextE>
          </BlocoE>
          <BlocoE>
            <TituloE>Tecnologias Utilizadas</TituloE>
            <TextE>Durante o estágio, tive a oportunidade de trabalhar com uma ampla gama de tecnologias, incluindo [lista de tecnologias]. A aplicação dessas tecnologias foi fundamental para o sucesso dos projetos em que estive envolvido.</TextE>
          </BlocoE>
          <BlocoE>
            <TituloE>Perspectivas Futuras</TituloE>
            <TextE>O estágio serviu como um trampolim para futuras oportunidades de crescimento e desenvolvimento profissional. Estou ansioso para aplicar os conhecimentos e habilidades adquiridos durante o estágio em desafios futuros</TextE>
          </BlocoE>
        </Esque>
        <Dire>
          <BlocoD>
            <TituloD>Explorando o Mundo do Desenvolvimento de TI: Uma Jornada de Estágio</TituloD>
            <TextD>Nesta página, vamos explorar a emocionante jornada de estágio em desenvolvimento de TI, destacando projetos, desafios e aprendizados significativos.</TextD>
          </BlocoD>
          <BlocoD>
            <TituloD>Projetos e Desafios</TituloD>
            <TextD>Ao longo do estágio, participei de projetos desafiadores que abrangeram desde o desenvolvimento de novos recursos até a otimização de processos existentes. Cada projeto apresentou seus próprios desafios únicos, que foram enfrentados com determinação e criatividade.</TextD>
          </BlocoD>
          <BlocoD>
              <TituloD>Aprendizados e Reflexões</TituloD>
              <TextD>Além do crescimento técnico, o estágio proporcionou uma valiosa oportunidade de aprendizado pessoal. Aprendi a importância da colaboração eficaz, comunicação clara e resolução de problemas em equipe. Essas habilidades são fundamentais para o sucesso em qualquer ambiente de trabalho</TextD>
            </BlocoD>
            <BlocoD>
            <TituloD>Contato</TituloD>
            <TextD>Para mais informações ou para entrar em contato, sinta-se à vontade para [inserir informações de contato].Agradeço por acompanhar minha jornada de estágio em desenvolvimento de TI. Estou animado para compartilhar mais sobre essa empolgante área com você!</TextD>
          </BlocoD>
        </Dire>
      </Comteudo>
    </>
  )

}