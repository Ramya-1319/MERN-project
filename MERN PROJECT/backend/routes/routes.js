const express = require('express');
const task = require('../model/model');
const routes = router();

// get all tasks

routes.get('/', async (req,res) => {
    try  {
        const tasks = await task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// create a new task

    // Create a new task object
    const newTask = {
        id: tasks.length + 1, // Generate a simple numeric ID (use UUID for production)
        title,
        description: description || '',
        completed: false,
    };

    // Add the new task to the array
    tasks.push(newTask);

    // Return the newly created task
    res.status(201).json(newTask);


// GET /api/tasks - Retrieve all tasks
app.get('/api/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
