import React from 'react'
import {Item} from './item'
import {Form} from './form'


const App =()=>{
    const [initialState, setState] = React.useState([])

    const [initialInput, setInput] = React.useState({
        noteTitle:"",
        noteContent:""
    })

    const changed = (e)=>{
        const {name, value} = e.target
        // console.log(name,value)

        setInput(prev=>{
            return {
                ...prev,
            [name]:value
            }
        })
    }

    const submitted =(e)=>{
        e.preventDefault()
        setState(prev=>{
            return [...prev,initialInput]
        })
        setInput({
            noteTitle:"",
            noteContent:""
        })
        // console.log(initialState)
    }

    const deleted = (id) =>{
        setState(prev=>{
            return prev.filter((item,index)=>{
                return index !== id
            })
        }) 
    }

    const additem = (item, index)=>{
        return  <Item 
            key={index}
            id={index}
            noteTitle={item.noteTitle}
            noteContent={item.noteContent}
            deleted={deleted}
        />
    }

    return <div className="container">
        <div className="header">
            <h1 className="headername">Keeper</h1>
        </div>
        
        <Form 
            changed={changed}
            noteTitle={initialInput.noteTitle}
            noteContent={initialInput.noteContent}
            submitted={submitted}

        />
        
        <div className="notes">
            {initialState.map(additem)}
        </div>
    </div>
}

export {App}