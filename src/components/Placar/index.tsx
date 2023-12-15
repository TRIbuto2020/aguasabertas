import { useState } from "react"

import { BtnPoints, PlacarBox, Pontos, ControlBox, Titulo } from "./styles"
import { Block } from "../../styles"



const Placar = () => {
  const [pontosCasa, setPontosCasa] = useState(0)
  const [pontosVisitante, setPontosVisitante] = useState(0)
  const [setCasa, setSetCasa] = useState(0)
  const [setVisitante, setSetVisitante] = useState(0)
  const [resetPrompt, setResetPrompt] = useState(0)

  const MaisPonto = (quem: string) => {
    if (quem == 'casa'){
      return(pontosCasa + 1)
    } else {
      return(pontosVisitante + 1)
    }
  }

  const MenosPonto = (quem: string) => {
    if (quem == 'casa'){
      if (pontosCasa > 0){
        return(pontosCasa - 1)
      } else {
        return(pontosCasa)
      }
    } else {
      if (pontosVisitante > 0){
        return(pontosVisitante - 1)
      } else {
        return(pontosVisitante)
    }}
  }

  const MarcarSet = () => {
    if (pontosCasa > pontosVisitante){
      setSetCasa(setCasa + 1)
    } else if (pontosVisitante > pontosCasa){
      setSetVisitante(setVisitante + 1)
    }
    setPontosCasa(0)
    setPontosVisitante(0)
  }

  const Reset = () => {
    setPontosCasa(0)
    setPontosVisitante(0)
    setSetCasa(0)
    setSetVisitante(0)
    setResetPrompt(0)
  }

  return (
    <Block>
      <Titulo>Placar</Titulo>
      <PlacarBox>
        <Pontos>
          <input type="text" placeholder="Casa" />
          <p>{setCasa}</p>
          <h4>{pontosCasa}</h4>
          <BtnPoints>
            <button onClick={() => {
              setPontosCasa(MaisPonto('casa'))
            }}> + </button>
            <button onClick={() => {
              setPontosCasa(MenosPonto('casa'))
            }}> - </button>
          </BtnPoints>
        </Pontos>
        <ControlBox>
          {resetPrompt == 0 && 
            <>
              <p>Controles</p>
              <button onClick={MarcarSet}>Set</button>
              <button onClick={() => setResetPrompt(1)}>Zerar</button>
            </>}
          {resetPrompt == 1 && 
            <>
              <p>Tem certeza?</p>
              <button onClick={() => setResetPrompt(0)}>Cancelar</button>
              <button onClick={Reset}>Sim, zerar!</button>
            </>}
          
        </ControlBox>
        <Pontos>
          <input type="text" placeholder="Visitante" />
          <p>{setVisitante}</p>
          <h4>{pontosVisitante}</h4>
          <BtnPoints>
            <button onClick={() => {
              setPontosVisitante(MaisPonto('visitante'))
            }}> + </button>
            <button onClick={() => {
              setPontosVisitante(MenosPonto('visitante'))
            }}> - </button>
          </BtnPoints>
        </Pontos>
      </PlacarBox>
    </Block>
  )
}

export default Placar