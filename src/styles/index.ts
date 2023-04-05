import {createGlobalStyle} from 'styled-components';
import vari from './var';

export const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'ShinGo'
    }

    body{
        background-color: ${vari.beige}
    }
`