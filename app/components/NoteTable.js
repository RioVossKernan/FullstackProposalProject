'use client'
import { useEffect, useState } from "react"
import classes from "./note-table-styles.module.css"

function NoteTable(props) {
    const notes = props.notes; // Get the notes from props

    return (
        <div>
            <h2>
                NoteBook
                </h2>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>Title</th>
                    <th>Contents</th>
                </tr>
            {
                notes.map((note) => 
                    <tr key={note.id} className={classes.row}>
                        <td>{note.Title}</td>
                        <td>{note.Contents}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default NoteTable; // Make sure to export the component