import React, { useState } from "react";
import Footer from "./components/Footer";
import Heading from "./components/Header";
import Note from "./components/Note";
import details from "./components/NoteDetails";
import CreateNote from "./components/CreateNote";

function App() {

    let [items, setItems] = useState(details);

    function addItem(title, desc) {
        let newItem = {
            id : items.length+1,
            title : title,
            desc : desc
        }
        setItems(prevItems => {
            return [...prevItems, newItem]
        })
    }

    function filterNote(id) {
        setItems(items.filter((detail) => {
            return detail.id !== id;
        }));
    }

    

    return <div>
        <Heading></Heading>
        <CreateNote onAdd={addItem} />
        <div className="note-container">
        {items.map(detail => {
            return <Note 
                key= {detail.id}
                id={detail.id}
                title= {detail.title}
                desc= {detail.desc} 
                onChecked={filterNote}       
    />;
        })}
        {/* <Note title={details[0].title} desc={details[0].desc}></Note>
        <Note title={details[1].title} desc={details[1].desc}></Note>
        <Note title={details[2].title} desc={details[2].desc}></Note> */}
        </div>
        <Footer></Footer>
    </div>
}

export default App;