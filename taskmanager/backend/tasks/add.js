const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Define Task Schema
const taskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    startingDate: Date,
    endingDate: Date,
    priority: String,
    status: String,
    assigneeTo: Number,
});

const Task = mongoose.model('Task', taskSchema);

// Define Route to Add Task
router.post('/add', async (req, res) => {
    const { id, title, description, startingDate, endingDate, priority, status, assigneeTo } = req.body;

    try {
        const newTask = new Task({
            id,
            title,
            description,
            startingDate,
            endingDate,
            priority,
            status,
            assigneeTo,
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: 'Error saving task', error });
    }
});

module.exports = router;
