import { useState } from "react"

function Eliminar(props) {

    const [inputDelete, setInputDelete] = useState("")

    function deleteName(nombre) {
        let newArr = props.compositores.filter((compositor) => {return compositor.nombre !== nombre})
        props.setCompositores(newArr)
        setInputDelete("")
    }

    return (
        <div>
            <input type="text" onChange={(event) => setInputDelete(event.target.value)} value={inputDelete} />
            <button onClick={() => deleteName(inputDelete)} >Eliminar</button>
        </div>
    )
}

export default Eliminar