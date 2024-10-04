const { createProject, getAllProjects } = require('../models/Project');

const addProject = async (name, description, url) => {
    if (!name || !description || !url) {
        throw new Error('Missing body item.');
    }

    const { data, error } = await createProject(name, description, url);
    if (error) {
        throw new Error('Save failed.');
    }

    return 'Project saved successfully!';
};

const fetchProjects = async () => {
    const { data, error } = await getAllProjects();
    if (error || data.length === 0) {
        throw new Error('Projects not found.');
    }

    return data;
};

module.exports = { addProject, fetchProjects };