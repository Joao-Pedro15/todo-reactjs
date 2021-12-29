import React, {useState} from 'react'
import {addItem} from '../actions/listAction'
import { useDispatch } from 'react-redux'

export default function Form(props) {

    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    function handleChange(event){
        let inputTask = event.target.value
        setTask(inputTask)
      }

    function onAddChange(event){
        event.preventDefault()

        if(task){
            // props.onAddItem(task)
            dispatch(addItem(task))
            setTask("")
        }
    }

    return (
        <form>
        <input type="text" placeholder="Adicione uma tarefa!" onChange={handleChange} value={task} />
        <button type="submit" onClick={onAddChange}><i class="fas fa-plus"></i></button>
      </form>
    )
}
