require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const connectToDabase = require('./db')
const app = express()
const Note = require('../src/models/note')
const bodyParser = require('body-parser')
connectToDabase()
// Function to select a random name from the list
app.use(bodyParser.json())

// app.get('/spust', async (req, resp) => {
//     resp.json(await Note.findById(req.params.id).exec())
// })

app.get('/spust', async (req, resp) => {
    resp.json(await Note.find().exec())
})

// app.post('/spust', async (req, resp) => {
//     try {
//         const note = new Note(req.body)
//         await note.save()
//         resp.status(201).json(note)
//     } catch (error) {
//         resp.status(400).json({ message: error.message })
//     }

// })



app.post('/spust', async (req, resp) => {
    try {
        const note = new Note(req.body)
        await note.save()
        resp.status(201).json(note)
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
})

app.get('/spust/:id', async (req, resp) => {
    resp.json(await Note.findById(req.params.id).exec())
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})