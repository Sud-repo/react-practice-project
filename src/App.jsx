import React from "react";
import Footer from "./components/Footer";
import Heading from "./components/Header";
import Note from "./components/Note";
import details from "./components/NoteDetails";

function createNote(detail) {
    return <Note 
        key= {detail.id}
        id={detail.id}
        title= {detail.title}
        desc= {detail.desc}        
    />;
}

function App() {
    return <div>
        <Heading></Heading>
        <div className="note-container">
        {details.map(createNote)}
        {/* <Note title={details[0].title} desc={details[0].desc}></Note>
        <Note title={details[1].title} desc={details[1].desc}></Note>
        <Note title={details[2].title} desc={details[2].desc}></Note> */}
        </div>
        <Footer></Footer>
    </div>
}

export default App;