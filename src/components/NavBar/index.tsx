import { Nav, NavList, BtnNav } from "./styles"

const NavBar = () => {

    return(
        <Nav>
            <h1>Águas Abertas</h1>
            <NavList>
                <li><BtnNav to={'/'}>HOME</BtnNav></li>
                <li><BtnNav to={'/'}>HOME</BtnNav></li>
                <li><BtnNav to={'/'}>HOME</BtnNav></li>
                <li><BtnNav to={'/'}>HOME</BtnNav></li>
            </NavList>
        </Nav>
    )
}

export default NavBar