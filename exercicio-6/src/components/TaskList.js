
export default function TaksList() {
    
    const taks = [
        {name:"tarefa 1"}, {name:"tarefa 2"}, {name:"tarefa 3"},
        {name:"tarefa 4"}, {name:"tarefa 5"}, {name:"tarefa 6"}, 
        {name:"tarefa 7"}, {name:"tarefa 8"}, {name:"tarefa 9"}]

    return (
        <>
            {taks.map(t => <p>Tarefa: {t.name}</p>)}
        </>
    )
}