import { Link } from "react-router-dom";
import styled from "styled-components";
import vari from "../../styles/var";

export const Nav = styled.nav`
    display: flex;
    background-color: ${vari.deepBlue};
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    position: fixed;
    top: 0;
    width: 100vw; 
`

export const NavList = styled.ul`
    display: flex;

    li{
        padding: 0 8px;
    }
`

export const BtnNav = styled(Link)`
    color: ${vari.blueGrey};
    font-weight: bold;
`