import React, {useState} from "react";

function Note(props){

    const [isChecked, setIsChecked] = useState(false);

    let [time, setTime] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked){
            const newTime = new Date().toLocaleDateString();
            setTime(newTime);
        }else {
            time = undefined;
        }
    };

    return <div className="note"> 
            <p>{props.id}</p>
            <h1 id="title" style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{props.title}</h1>
            <p>{props.desc}</p>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span id="time">{time}</span>
        </div>;
}

export default Note;