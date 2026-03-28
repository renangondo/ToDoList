import react, { useEffect, useState } from "react";



const Home = () => {

    const [lista, setLista] = useState([]);
    //id, texto, status
    useEffect(()=>{
        const listaStorage = JSON.parse(localStorage.getItem("lista-tarefas"))||[];
        setLista(listaStorage);
    },[]);

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <input type="button" value= "Novo" />
            {lista.length> 0 ?lista.map((objeto) => (
                <p key={objeto.id}>{objeto.texto}</p>
            )):"Sem tarefas"}
        </div>
    )
} 

export default Home;

//? então
//: Se não 