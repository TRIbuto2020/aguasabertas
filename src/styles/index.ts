import styled, {createGlobalStyle} from 'styled-components';
import vari from './var';

export const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'ShinGo';
        background-color: ${vari.bg}
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 90%;
    margin: 0 auto;
`

export const Block = styled.div` 
    margin: 20px auto;
    border-radius: 16px;
    box-shadow: ${vari.sombra};
    padding: 16px 0;
`