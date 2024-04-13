//los compponentes son funciones
export function Header(props){
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Main</li>
                <li>Contact</li>
            </ul>
            <div>Hola {props.name}</div>
        </div>
    );
}