import styled from "styled-components";

export const Body = styled.div `
 flex-direction: column;
`
export const Centro = styled.h1 ` 
    text-align: center;
    font-size: 50px;
`

export const Contener = styled.div `
    display: flex;
    justify-content: center;
    height: 100px;
`

export const Bloco = styled.div  `
    background-color: rgba(78, 76, 76, 0.637);
    border-radius: 20px;
    padding: 30px;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
`

export const Input = styled.input `
    border: 0;
    background-color: rgb(224, 219, 219);
    margin: 20px;
    padding: 20px;
    border-radius: 30px;
`

export const Button = styled.button `
    background-color: rgb(34, 22, 192);
    color: wheat;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 30px;
    border: 0px;
    padding: 20px 0px 20px 0px;
    & :hover{
        background-color: rgb(83, 75, 187);
    transform: all 3s;
    }
`