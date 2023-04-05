import Main from "../../components/Main"
import NavBar from "../../components/NavBar"
import { Container } from "../../styles"

const Home = () => {
    return(
        <Container>
            <NavBar page="home" />
            <Main />
        </Container>
    )
}

export default Home