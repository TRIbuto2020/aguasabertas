import { Link } from "react-router-dom";
import styled from "styled-components";
import vari from "../../styles/var";

export const Nav = styled.nav`
    display: flex;
    background-color: ${vari.deepBlue};
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    position: sticky;
    top: 0;
    width: 100vw; 
    box-shadow: ${vari.sombra};

    h1{
        font-weight: 100;
        color:${vari.blueGrey}
    }
`

export const NavList = styled.ul`
    display: flex;

    li{
        padding: 0 8px;
    }
`

export const BtnNav = styled(Link)`
    color: ${vari.blueGrey};
    font-weight: 400;
`