import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

const Item = (item) =>{
    return <div className="note-item">
    <h3 className="note-title">{item.noteTitle}</h3>
    <p className="note-content">{item.noteContent}</p>
<button className="delete-btn" onClick={(e)=>{
    e.preventDefault()
    item.deleted(item.id)
}}><DeleteIcon /></button>
</div>
}

export {Item}