const express = require('express');
const router = express.Router();
const db = require('../data/schemes.js');

router.get('/', async (req, res) => {
    
    try {
        const projects = await db('projects');
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});