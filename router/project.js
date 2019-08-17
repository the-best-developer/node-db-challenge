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
        
    }
});

// ##### GET #####
router.get('/addedProject', async (req, res) => {
    
    try {
        const projects = await db('project');
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;