import { useState } from "react"

export default function TaksList() {
    
    const [task, setTask] = useState([
        {id: 1, name:"tarefa 1", completed: false}, {id: 2, name:"tarefa 2", completed: false}, {id: 3, name:"tarefa 3", completed: false},
        {id: 4, name:"tarefa 4", completed: false}, {id: 5, name:"tarefa 5", completed: false}, {id: 6, name:"tarefa 6", completed: false}, 
        {id: 7, name:"tarefa 7", completed: false}, {id: 8, name:"tarefa 8", completed: false}, {id: 9, name:"tarefa 9", completed: false}
    ])

    const handleCheckbox = (taskID) => {
        setTask(currentTasks => 
            currentTasks.map(task => {
                if (task.id === taskID) {
                    return {...task, completed: !task.completed}
                }
                return task
            })
        )
    }

    console.log(task);
    
    return (
        <>
            {task.map(t => <p>Tarefa: {t.name} 
                <input type="checkbox" checked={t.completed} onChange={() => handleCheckbox(t.id)}>
                </input></p>)}
        </>
    )
}