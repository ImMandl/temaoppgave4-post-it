import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import { MdDelete } from "react-icons/md"
import { MdDragHandle } from "react-icons/md"
import './NoteModule.css'

const NoteSumbodule = (props) => {

    const textArray = []

    const [note, setNote] = useState(textArray)
    const textRef = useRef()

    const updateText = () => {
        setNote(textRef.current)
    }

    return (
        // gjør post-it lappene draggable
        <Draggable
            handle=".handle"
        >
            { /* sticky note kortet */}
            <div className="card scroll " style={{ backgroundColor: props.color }} >
                <div className="notepad-item">

                    <div className='icon-btn-container'>
                        {/* knapp/ikon for å flytte på sticky note */}
                        <MdDragHandle className="handle" style={{ fontSize: 3 + 'rem', cursor: 'all-scroll' }} />
                        {/* knapp/ikon for å slette en sticky note */}
                        <MdDelete onClick={() => props.remove(props.id)} style={{ fontSize: 2.6 + 'rem', cursor: 'pointer', justifySelf: 'end' }} />
                    </div>

                    {/* redigerbar tekst som dukker opp på sticky note */}
                    <li contentEditable ref={textRef} onInput={updateText}>{props.todo}</li>

                </div>
            </div >
        </Draggable >
    )
}

export default NoteSumbodule