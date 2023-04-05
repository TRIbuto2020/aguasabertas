import { Block } from "../../styles"
import { Inset, Titulo } from "./styles"

const CalcPace = () => {

    return(
        <Block>
            <Titulo>Calculadora de Ritmo</Titulo>
            <Inset>
                <form>
                    <select name="dist">
                        <option value={42197}>Maratona</option>
                        <option value={21095}>Meia Maratona</option>
                        <option value={10000}>10K</option>
                        <option value={5000}>5K</option>
                    </select>
                    <input type="number" />
                </form>
            </Inset>
        </Block>
    )
}

export default CalcPace