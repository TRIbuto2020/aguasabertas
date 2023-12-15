import NavBar from "../../components/NavBar"
import Placar from "../../components/Placar"
import { Container } from "../../styles"

const Home = () => {
    return(
        <Container>
            <NavBar page="home" />
            <Placar />
        </Container>
    )
}

export default Home