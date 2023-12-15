import styled from "styled-components";
import vari from "../../styles/var";


export const Titulo = styled.h2`
    color: ${vari.blue};
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 16px;
`

export const PlacarBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${vari.line};
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;

  @media(max-width: 760px){
    flex-direction: column;
    align-items: center;
  }
`

export const Pontos = styled.div`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid ${vari.line};
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    text-align: center;
    border-radius: 16px;
    border: 1px solid ${vari.line};
  }

  h4{
    text-align: center;
    font-size: 72px;
    font-weight: normal;
    line-height: 100px;
  }

  @media(max-width: 760px){
    h4{
      font-size: 40px;
      line-height: 50px;
    }
  }
`

export const BtnPoints = styled.div`
  display: flex;
  gap: 16px;

  button {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    font-weight: bold;
    font-size: 24px;
    border: 1px solid;
    border-color: ${vari.green};
    cursor: pointer;
    transition: 0.4s;
    line-height: 0px;

    :hover{
      color: ${vari.bg};
      background-color: ${vari.green};
    }

    :nth-child(2){
      border-color: ${vari.red};

      :hover{
      color: ${vari.bg};
      background-color: ${vari.red};
    }
    }
  }

  @media(max-width: 760px){
    button{
      height: 30px;
      border-radius: 8px;
    }
  }
`

export const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  gap: 8px;

  p{
    text-align: center;
  }

  button {
    border-radius: 16px;;
    border: none;
    font-weight: bold;
    border: 1px solid;
    border-color: ${vari.green};
    cursor: pointer;
    transition: 0.4s;

    :hover{
      color: ${vari.bg};
      background-color: ${vari.green};
    }

    :nth-child(3){
      border-color: ${vari.red};

      :hover{
      color: ${vari.bg};
      background-color: ${vari.red};
    }
    }
  }

  @media(max-width: 760px){
    width: 80%;
    gap: 4px;
    padding: 8px 0;

    p{
      line-height: 14px;
    }
  }
`