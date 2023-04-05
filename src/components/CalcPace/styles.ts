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
    box-shadow: ${vari.inset};
    width: 90%;
    margin: auto;

    p{
        font-size: 10px;
    }
`