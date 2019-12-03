import React, { useState } from 'react'
import '../App.css'
import '../Components/Radiobtns.css'
import NoteSubmodule from './NoteSubmodule'

const Note = () => {

    // array med notes i
    let array = [
        {
            text: 'edit this text',
            id: 1,
            color: '#ffc'
        }
    ]

    const [todos, setTodos] = useState(array)
    const [noteId, setNoteId] = useState('') // må ha med '' ellers vil ikke note bli slettet
    const [noteColor, setNoteColor] = useState('#ffc') // fargekode i usestate så note starter med farge selv om man ikke velger en

    const remove = (id) => {
        // fjerner note item
        setTodos(
            // fjerner notes basert på deres unike ide
            // hvis id er lik fjern som note som blir trykket på fjern
            todos.filter(todo => todo.id !== id)
        )
    }

    const makeNote = () => {
        // skal gi hver note en unik id
        setNoteId(noteId + 1)
        // lager en note 
        setTodos([...todos,
        {
            text: 'take notes',
            id: noteId,
            color: noteColor
        },
        ])
    }

    // fargene man kan gi post-it lappene
    const yellowColor = () => {
        setNoteColor('#ffc')
    }

    const pinkColor = () => {
        setNoteColor('pink')
    }

    const tealColor = () => {
        setNoteColor('lightblue')
    }

    /* Filtrerer post-its etter farger */
    const filterColors = () => {
        setTodos(
            array.filter(
                todo => todo.color.includes(array.color)
            )
        )

    }

    return (
        <div>
            <div className="wrapper">
                <div>
                    <h1>Take notes!</h1>
                    {/* knapper som endrer farger på sticky noten */}
                    <div className="categories">
                        <label className="container">Yellow
                            <input type="radio" name="radio" onClick={yellowColor} />
                            <span className="yellow checkmark"></span>
                        </label>
                        <label className="container">Pink
                            <input type="radio" name="radio" onClick={pinkColor} />
                            <span className="pink checkmark"></span>
                        </label>
                        <label className="container">Teal
                            <input type="radio" name="radio" onClick={tealColor} />
                            <span className="teal checkmark"></span>
                        </label>
                    </div>

                    {/* lag note */}
                    <button className="create-btn" onClick={makeNote} >Make new post-it note</button>
                </div>

                {/* Filter */}
                <div >
                    <h1>Filter</h1>
                    <div className="categories">
                        <label className="container">Show all post-its
                            <input type="radio" name="radio" onClick={''} />
                            <span className="all checkmark"></span>
                        </label>
                        <label className="container">Show yellow post-its
                            <input type="radio" name="radio" onClick={filterColors('#ffc')} />
                            <span className="yellow checkmark"></span>
                        </label>
                        <label className="container">Show pink post-its
                            <input type="radio" name="radio" onClick={pinkColor('pink')} />
                            <span className="pink checkmark"></span>
                        </label>
                        <label className="container">Show teal post-its
                            <input type="radio" name="radio" onClick={tealColor('lightblue')} />
                            <span className="teal checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>

            {/* note i submodule */}
            <section className="card-container">
                {
                    todos.map(
                        (todo, key) =>
                            <NoteSubmodule
                                color={todo.color}
                                todo={todo.text}
                                id={todo.id}
                                key={key}
                                remove={remove}
                            />
                    )
                }
            </section>
        </div >
    )
}
export default Note