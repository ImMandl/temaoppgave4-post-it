import React, { useState, useRef } from 'react'
import { MdDelete } from "react-icons/md"
import './NoteModule.css'

const NoteSumbodule = (props) => {

    const textArray = []

    const [note, setNote] = useState(textArray)
    const textRef = useRef()

    const updateText = () => {
        setNote(textRef.current)
    }

    return (
        // sticky note kortet 
        <div className="card scroll " style={{ backgroundColor: props.color }} >
            <div className="notepad-item">

                {/* knapp/ikon for å slette en sticky note */}
                <MdDelete onClick={() => props.remove(props.id)} style={{ fontSize: 2.6 + 'rem', cursor: 'pointer', float: 'right' }} />

                {/* redigerbar tekst som dukker opp på sticky note */}
                <li contentEditable ref={textRef} onInput={updateText}>{props.todo}</li>

            </div>
        </div >
    )
}

export default NoteSumbodule