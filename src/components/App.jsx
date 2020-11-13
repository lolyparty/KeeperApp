import React from 'react'

const App =()=>{
    


    return <div className="container">
        <div className="header">
            <h1 className="headername">Keeper</h1>
        </div>
        <form className="form">
            <input placeholder="Title" type="text" />
            <textarea placeholder="Note" type="text" col="9" rows="5"></textarea>
            <button className="btn">Add</button>
        </form>
        <div className="notes">
            <div className="note-item">
                <h3 className="note-title">Note Title</h3>
                <p className="note-content">Note content loremrronner nolnerwioiwchnf wnkdncubkr</p>
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    </div>
}

export {App}