import { useState } from "react"
import { Block } from "../../styles"
import { Calculadora, Inset, Titulo } from "./styles"

const CalcPace = () => {
    const [horasC, setHorasC] = useState(4)
    const [minutosC, setMinutosC] = useState(0)
    const [distanciaC, setDistanciaC] = useState(42195)

    const calculaPaceC = () => {
        const tempoMinutos : number = (horasC * 60) + minutosC
        const paceMin = Math.floor(tempoMinutos/(distanciaC/1000))
        const paceSec =  Math.round(((tempoMinutos/(distanciaC/1000)) - paceMin) * 60)
        return (paceMin + "'" + paceSec + '"' + '/Km')
    }

    const [horasN, setHorasN] = useState(0)
    const [minutosN, setMinutosN] = useState(40)
    const [distanciaN, setDistanciaN] = useState(1900)

    const calculaPaceN = () => {
        const tempoMinutos : number = (horasN * 60) + minutosN
        const paceMin = Math.floor(tempoMinutos/(distanciaN/100))
        const paceSec =  Math.round(((tempoMinutos/(distanciaN/100)) - paceMin) * 60)
        return (paceMin + "'" + paceSec + '"' + '/100m')
    }
    
    const [horasB, setHorasB] = useState(3)
    const [minutosB, setMinutosB] = useState(0)
    const [distanciaB, setDistanciaB] = useState(90)

    const calculaPaceB = () => {
        const tempoMinutos : number = (horasB * 60) + minutosB
        const  tempoHoras = tempoMinutos/60
        const velocidade = Math.round(distanciaB/tempoHoras)
        return (velocidade + 'Km/h')
    }
    

    return(
        <Block>
            <Titulo>Calculadora de Ritmo</Titulo>
            <Inset>
                <Calculadora>
                    <h3>Corrida</h3>
                    <select name="dist" value={distanciaC} onChange={(event) => {
                        setDistanciaC(event.target.value as unknown as number)
                    }}>
                        <option value={42195}>Maratona</option>
                        <option value={21098}>Meia Maratona</option>
                        <option value={10000}>10K</option>
                        <option value={5000}>5K</option>
                    </select>
                    <div>
                        <input type="number" min={0} max={6} value={horasC} onChange={(event) => {setHorasC(Number(event.target.value))}}/>
                        <label>Horas</label>
                    </div>
                    <div>
                        <input type="number" min={0} max={59} value={minutosC} onChange={(event) => {setMinutosC(Number(event.target.value))}}/>
                        <label>Minutos</label>
                    </div>
                    <h4>{calculaPaceC()}</h4>
                </Calculadora>
                <hr />
                <Calculadora>
                    <h3>Natação</h3>
                    <select name="dist" value={distanciaN} onChange={(event) => {
                        setDistanciaN(event.target.value as unknown as number)
                    }}>
                        <option value={4800}>3.8K</option>
                        <option value={1900}>1.9K</option>
                        <option value={1500}>1.5K</option>
                        <option value={750}>750m</option>
                    </select>
                    <div>
                        <input type="number" min={0} max={6} value={horasN} onChange={(event) => {setHorasN(Number(event.target.value))}}/>
                        <label>Horas</label>
                    </div>
                    <div>
                        <input type="number" min={0} max={59} value={minutosN} onChange={(event) => {setMinutosN(Number(event.target.value))}}/>
                        <label>Minutos</label>
                    </div>
                    <h4>{calculaPaceN()}</h4>
                </Calculadora>
                <hr />
                <Calculadora>
                    <h3>Ciclismo</h3>
                    <select name="dist" value={distanciaB} onChange={(event) => {
                        setDistanciaB(event.target.value as unknown as number)
                    }}>
                        <option value={180}>180K</option>
                        <option value={90}>90K</option>
                        <option value={50}>50K</option>
                        <option value={20}>20K</option>
                    </select>
                    <div>
                        <input type="number" min={0} max={15} value={horasB} onChange={(event) => {setHorasB(Number(event.target.value))}}/>
                        <label>Horas</label>
                    </div>
                    <div>
                        <input type="number" min={0} max={59} value={minutosB} onChange={(event) => {setMinutosB(Number(event.target.value))}}/>
                        <label>Minutos</label>
                    </div>
                    <h4>{calculaPaceB()}</h4>
                </Calculadora>
            </Inset>
        </Block>
    )
}

export default CalcPace