import styled from "styled-components";
import vari from "../../styles/var";

export const Titulo = styled.h2`
    color: ${vari.green};
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 16px;
`

export const Inset = styled.div`
    padding: 16px;
    border-radius: 16px;
    border: 1px solid ${vari.line};
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    hr{
        border: none;
        border-left: 1px solid ${vari.line};
        border-top: 1px solid ${vari.line};

        @media(max-width: 760px){
            width: 100%
        }
    }
`

export const Calculadora = styled.form`
    max-width: 400px;

    h3{
        color: ${vari.green};
        text-align: center;
        font-size: 1.2rem;
        margin-bottom: 16px;
    }

    select{
        font-size: 1.1rem;
        border-radius: 6px;
        padding: 8px;
        border-color: ${vari.line};
    }

    div{
        display: flex;
        margin-top: 8px;

        label{
            margin-left: 8px;
        }

        input{
            border-radius: 8px;
            text-align: center;
            border: 1px solid ${vari.line}
        }
    }

    h4{
        margin-top: 16px;
        text-align: center;
    }
`