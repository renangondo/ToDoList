import react, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Form = () => {

    const [texto, setTexto] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        console.log("UEF:"+texto)
    }, [texto])

    const alterar = (e)=> {
        setTexto(e.target.value);
    }

    const salvar = () => {
        const toDoList = {
            id:Date.now(),
            texto : texto,
            status:false
        }
        localStorage.setItem("lista-tarefas",JSON.stringify(toDoList))
        navigate("/")
    }

    return(
        <div>
            <input type="text" value={texto} onChange={alterar} />
            <input type="button" onClick={salvar} value="Salvar" />
        </div>
    )
}

export default Form