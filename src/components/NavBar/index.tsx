import { Link } from "react-router-dom"
import { Nav, NavList, BtnNav } from "./styles"

const NavBar = () => {

    return(
        <Nav>
            <Link to={'/'}><h1>Águas Abertas</h1></Link>
            <NavList>
                <li><BtnNav to={'/'}>--</BtnNav></li>
                <li><BtnNav to={'/'}>--</BtnNav></li>
                <li><BtnNav to={'/'}>--</BtnNav></li>
                <li><BtnNav to={'/'}>--</BtnNav></li>
            </NavList>
        </Nav>
    )
}

export default NavBar