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

    const [todos, setTodos] = useState(array) // 
    const [fargevalg, setFargevalg] = useState("all") // filterer post-its etter farge. Starter med å vise alle
    const [noteId, setNoteId] = useState(2) // starter neste note med id 2


    const remove = (id) => {
        // fjerner note item
        setTodos(
            // fjerner notes basert på deres unike ide
            // hvis id er lik fjern som note som blir trykket på fjern
            todos.filter(todo => todo.id !== id)
        )
    }

    const makeNote = (evt) => {
        // skal gi hver note en unik id
        setNoteId(noteId + 1)
        // lager en kopi av array
        let kopi = [...todos]
        // lager en note 
        setTodos([...kopi,
        {
            text: 'take notes',
            id: noteId,
            color: evt.target.value
        },
        ])
    }

    /* Filtrerer post-its etter farger */
    const filterColors = (evt) => {
        setFargevalg(evt.target.value)
    }

    return (
        <div>
            <div className="wrapper">
                <div>
                    <h1>Take notes!</h1>
                    <h2>Choose color for post-it note</h2>
                    {/* knapper som lager notes */}
                    <div className="categories">
                        <label className="container">Yellow
                            <input type="button" name="button" value="#ffc" onClick={makeNote} />
                            <span className="yellow checkmark"></span>
                        </label>
                        <label className="container">Pink
                            <input type="button" name="button" value="pink" onClick={makeNote} />
                            <span className="pink checkmark"></span>
                        </label>
                        <label className="container">Teal
                            <input type="button" name="button" value="lightblue" onClick={makeNote} />
                            <span className="teal checkmark"></span>
                        </label>
                    </div>
                </div>

                {/* Filter */}
                <div >
                    <h1>Filter</h1>
                    <h2>Choose color to filter by</h2>
                    <div className="categories">
                        <label className="container" >Show all post-its
                            <input type="radio" name="radio" value="all" onClick={filterColors} />
                            <span className="all checkmark"></span>
                        </label>
                        <label className="container">Show yellow post-its
                            <input type="radio" name="radio" value="#ffc" onClick={filterColors} />
                            <span className="yellow checkmark"></span>
                        </label>
                        <label className="container">Show pink post-its
                            <input type="radio" name="radio" value="pink" onClick={filterColors} />
                            <span className="pink checkmark"></span>
                        </label>
                        <label className="container">Show teal post-its
                            <input type="radio" name="radio" value="lightblue" onClick={filterColors} />
                            <span className="teal checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>

            {/* note i submodule */}
            <section className="card-container">
                {fargevalg !== "all" &&
                    todos.filter(todo => todo.color === fargevalg).
                        map((todo, Key) =>
                            <NoteSubmodule
                                color={todo.color}
                                todo={todo.text}
                                id={todo.id}
                                key={Key}
                                remove={remove}
                            />)
                }
                {fargevalg === "all" &&
                    todos.map((todo, Key) =>
                        <NoteSubmodule
                            color={todo.color}
                            todo={todo.text}
                            id={todo.id}
                            key={Key}
                            remove={remove}
                        />)
                }
            </section>
        </div >
    )
}
export default Note