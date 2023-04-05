import CalcPace from "../../components/CalcPace"
import NavBar from "../../components/NavBar"
import { Container } from "../../styles"

const Calc = () => {
    return(
    <Container>
            <NavBar page="calc" />
            <CalcPace />
    </Container>
    )
}

export default Calc