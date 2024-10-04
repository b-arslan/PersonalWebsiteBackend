const { addProject, fetchProjects } = require('../services/projectService');

const createProject = async (req, res) => {
    const { name, description, url } = req.body;
    try {
        const message = await addProject(name, description, url);
        res.status(200).json({ success: true, message });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getProjects = async (req, res) => {
    try {
        const data = await fetchProjects();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

module.exports = { createProject, getProjects };