import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { Nav, NavList, MenuBtn, Menu, NavDiv } from "./styles"
import List from "./list";

type Props = {
    page: "home" | "calc"
}

const NavBar = (props: Props) => {
    const [menuAberto, setMenuAberto] = useState(false)
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    
    return(
        <NavDiv>
            <Nav  page={props.page}>
                <Link to={'/'}><h1>Águas Abertas</h1></Link>
                    {windowSize[0] > 760 ? 
                        <NavList>
                            <List page={props.page} />
                        </NavList>
                    : <MenuBtn page={props.page} onClick={() => setMenuAberto(!menuAberto)}>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </MenuBtn>}
            </Nav>
            {menuAberto? 
            <Menu>
                <NavList>
                    <List page={props.page} />
                </NavList> 
            </Menu>: ''}
        </NavDiv>
    )
}

export default NavBar