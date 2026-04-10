import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getTarefas, salvarTarefas } from "../../services/tarefaService";



const Home = () => {

    const navigate = useNavigate();

    const [lista, setLista] = useState([]);
    //id, texto, status
    useEffect(()=>{
        const listaStorage = getTarefas()
        setLista(listaStorage);
    },[]);

    const alterar = (id) => {
        navigate(`/form/${id}`);
    }

    const excluir = (id) => {
        const listaStorage = getTarefas()
        const listaNova = listaStorage.filter(item => item.id !=id);
        setLista(listaNova);
        salvarTarefas(listaNova)
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="button" value= "Novo" />
            <ol>
            {lista.length> 0 ?lista.map((objeto) => (
                <li key={objeto.id}>
                    <span>{objeto.texto}</span>
                    <button onClick={()=>alterar(objeto.id)}>Alterar</button>
                    <button onClick={()=>excluir(objeto.id)}>Excluir</button>
                </li>
                
                )):"Sem tarefas"}
            </ol>
        </div>
    )
} 

export default Home;

//? então
//: Se não 