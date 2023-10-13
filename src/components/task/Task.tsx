import { useState, useEffect } from 'react'

function Task() {
    const [isCompletado, setIsCompletado] = useState(false)
    const [tarefa, setTarefa] = useState('')

    useEffect(() => {
        if (isCompletado) {
            setTarefa('Parabéns! Você concluiu a tarefa!')
        }
    }, [isCompletado])

    return (
        <div>
            <h1>Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick={() => setIsCompletado(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default Task