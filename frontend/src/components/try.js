const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        background: 'black',
        color: 'pink'      
    }
}

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avartar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y Zara"
            />
            <ul>
                <l1>Improve the videophone</l1><br/>
                <l1>Prepare aeronautics lectures</l1>
                <l1>Work on the alcohol-fuelled engine</l1>
            </ul>
        </div>
    )
}

 