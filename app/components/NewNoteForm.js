'use client'
import { useState } from "react"
import classes from "./new-note-form-styles.module.css"

function NewNoteForm(props) {
    async function onSubmit(){
        const newNoteBody = {
            Title,
            Contents
        }
        const res = await fetch ("http://localhost:8080/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newNoteBody)
        })
        props.getAllNotes()
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [Title, setTitle] = useState("")
    const [Contents, setContents] = useState("")

    return (
        <div>
            <h2>Add New Note</h2>
            <div className = {classes.mainForm}>
                <div>
                    <label>Title: </label>
                    <input 
                    name="title"
                    value={Title}
                    onChange = {(event) => setTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label>Contents: </label>
                    <input 
                    name = "contents"
                    value={Contents}
                    onChange = {(event) => setContents(event.target.value)}
                    />
                </div>
            </div>
            <br/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default NewNoteForm