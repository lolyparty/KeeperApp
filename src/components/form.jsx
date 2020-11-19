import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Zoom from '@material-ui/core/Zoom';
// import Fab from '@material-ui/core/Fab'

const Form=(props)=>{

    const [expandState, setExpansion] = React.useState(false)

    return <form className="form">
    {expandState && <input placeholder="Title" type="text" name="noteTitle" onChange={(e)=>{
        props.changed(e)
    }} value={props.noteTitle} />}
    <textarea placeholder="Note" type="text" col="9" rows={expandState ? "8" : "3"} name="noteContent" onChange={props.changed} value={props.noteContent} onClick={()=>{
        setExpansion(true)
    }} ></textarea>
    
    {expandState && <Zoom in={expandState}><button className="btn" onClick={(e)=>{
        props.submitted(e)
    }}><AddCircleIcon /></button></Zoom>}
    
</form>
}

export {Form}