import { Link } from "react-router-dom";
import styled from "styled-components";
import vari from "../../styles/var";

type Props = {
    page: string
}

const cor = (props: Props) => {
    if (props.page === 'home') { 
        return(vari.blue)
    } else if (props.page === 'calc'){
        return(vari.green)
    }
}

export const NavDiv = styled.div`
    padding: 8px 24px;
    position: sticky;
    top: 8px;
    margin: 16px auto;
    box-shadow: ${vari.sombra};
    border-radius: 16px;
`

export const Nav = styled.nav<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: ${cor};
        font-weight: 400;
        font-size: 1rem;
    }
`

export const NavList = styled.ul`
    display: flex;

    li{
        padding: 0 8px;

        &:nth-child(-n+3){
            border-right: 1px solid rgb(204, 219, 232);
        }
    }

    @media (max-width: 760px){
        flex-direction: column;
        width: 100%;

        li:nth-child(-n+3){
            width: 100%;
            border-bottom: 1px solid rgb(204, 219, 232);
            border-right: none;

        }
    }
`

export const BtnNav = styled(Link)<Props>`
    color: ${cor};
    font-weight: 400;
`

export const MenuBtn = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;

    span{
        width: 100%;
        height: 12%;
        background-color: ${cor};
        display: block;
        border-radius: 32px;

        &:nth-child(2){
            margin: 19% 0;
        }
    }
`

export const Menu = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    margin: 16px auto 8px;
    box-shadow: ${vari.inset};
    border-radius: 16px;
    padding: 16px;

    @media (max-width: 760px){
        justify-content: start;
    }
`