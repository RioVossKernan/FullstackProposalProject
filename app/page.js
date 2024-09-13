'use client' // This is a client component
// We import components from other files like this

import { useEffect, useState } from 'react'
import NewNoteForm from './components/NewNoteForm'
import NoteTable from './components/NoteTable'

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {

    // Array of notes state
    const [notes, setNotes] = useState([])

    // A function to get all of the notes from the frontend. MAKE SURE your backend is running on port 8080!
    async function getAllNotes() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        setNotes(resJSON)
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
    useEffect(() => {
        getAllNotes()
    }, [])

  return (
    <div>
      <h1 className="bg-blue-500 text-white p-4"> Rio's Notebook App</h1>
      <NewNoteForm 
        getAllNotes={getAllNotes}
      ></NewNoteForm>

      <NoteTable 
        notes={notes}>
      </NoteTable>
    </div>
  );
}
