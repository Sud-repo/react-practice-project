import React, { useState } from "react";

function CreateNote(props) {

    let [note, setNote] = useState({
        title : "",
        desc : ""
    });

    function handleChange(event) {
        let {name, value} = event.target;
        setNote(prev => {
            return {
                ...prev,
                [name] : value
            }
        })

    }

    return<div className="add-area">
        <input className="text-box" onChange={handleChange} name="title" type="text" placeholder="title" value={note.title} /> <br />
        <input className="text-box" onChange={handleChange} name="desc" type="text" placeholder="description" value={note.desc} /> <br />
        <button className="add-button" onClick={() => props.onAdd(note.title, note.desc)}>Add</button>
    </div>
}

export default CreateNote;