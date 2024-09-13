import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import e from 'cors';
import {db} from './util/FirebaseInit.js';
import { collection, getDocs, addDoc} from "firebase/firestore";
dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", async (req, res) => {
    const collectionRef = collection(db, "Notes");
    const collectionSnap = await getDocs(collectionRef);
    const docs = [];
    collectionSnap.forEach((doc) => {
        docs.push(doc.data());
    });
    res.send(docs);
});

app.post("/", async (req, res) => {
	const noteRef = collection(db, "Notes");
	const noteBody = req.body
	try {
		await addDoc(noteRef, noteBody)
	} catch (e) {
		console.error(e)
		res.status(500);
	}
	res.status(200).send("Succesfully Created Note")
})


// Start the server and listen on the specified port for incoming requests from the frontend
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});