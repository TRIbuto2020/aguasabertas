import { BtnNav } from "./styles"

type Props ={
    page: string
}

const List = (props: Props) => {

    return(
        <>
            <li><BtnNav page={props.page} to={'/Calculadora'}>Calculadoras</BtnNav></li>
            <li><BtnNav page={props.page} to={'/'}>Treinos</BtnNav></li>
            <li><BtnNav page={props.page} to={'/'}>Provas</BtnNav></li>
            <li><BtnNav page={props.page} to={'/'}>Loja</BtnNav></li>
        </>
    )
}

export default List