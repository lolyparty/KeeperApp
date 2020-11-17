import React from 'react'

const Form=(props)=>{

    return <form className="form">
    <input placeholder="Title" type="text" name="noteTitle" onChange={(e)=>{
        props.changed(e)
    }} value={props.noteTitle} />
    <textarea placeholder="Note" type="text" col="9" rows="5" name="noteContent" onChange={props.changed} value={props.noteContent} ></textarea>
    <button className="btn" onClick={(e)=>{
        props.submitted(e)
    }}>Add</button>
</form>
}

export {Form}