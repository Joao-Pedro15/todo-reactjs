import React from 'react'
import Card from './Card'
import {useDispatch} from 'react-redux'
import {deleteItem} from '../actions/listAction'

function ListItem(props) {
    const dispatch = useDispatch()
    return (
        <li>
            <Card>
                {props.item.text}
                <button className="trash-btn" onClick={()=>{dispatch(deleteItem(props.item.id))}}><i class="fas fa-trash"></i></button>
            </Card>
        </li>
    )
}

export default ListItem
