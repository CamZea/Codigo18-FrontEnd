export function Footer(props){
    return (
        <footer>
            <h4>Todos los derechos son reservados</h4>
            <div>
                <h5>!{props.name}</h5>
            </div>
        </footer>
    );
}