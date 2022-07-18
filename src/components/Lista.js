function Lista(props) {
    return (
    <ul>
        {props.compositores.map((compositor) => <li>{compositor.nombre}</li>)}
    </ul>
    )
}

export default Lista