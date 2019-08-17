const express = require('express');
const router = express.Router();
const db = require('../projectDb.js');

// ##########
//  Resource
// ##########

// ##### POST #####
router.post('/resource', async (req, res) => {
    const resourceData = req.body;

    try {
        const addedResource = await db('resource').insert(resourceData);
        res.json( addedResource ? addedResource : null );
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##### GET #####
router.get('/resource', async (req, res) => {
    
    try {
        const resources = await db('resource');
        res.json(resources);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##########
//  Project
// ##########

// ##### POST #####
router.post('/project', async (req, res) => {
    const projectData = req.body;

    try {
        const addedProject = await db('project').insert(projectData);
        res.json( addedProject ? addedProject : null );
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##### GET #####
router.get('/project', async (req, res) => {
    
    try {
        const projects = await db('project');
        
        res.json(
            projects.map((project) => {
                project.completed = !!project.completed;
                return project;
            })
        );
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##########
//  Task
// ##########

// ##### POST #####
router.post('/task/:id', async (req, res) => {
    let taskData = req.body;
    const { id } = req.params;
    taskData.project_id = id;

    try {
        const addedTask = await db('task').insert(taskData);
        res.json( addedTask ? addedTask : null );
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##### GET #####
router.get('/task', async (req, res) => {
    
    try {
        let tasks = await db('task as tsk')
        .join('project as prjt', 'prjt.id', '=', 'tsk.project_id')
        .select('tsk.*', 'prjt.name as project_name', 'prjt.description as project_description')
        
        tasks = tasks.map((task) => {
            task.completed = !!task.completed;
            return task;
        })

        res.json(tasks ? tasks : null)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;