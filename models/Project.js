const supabase = require('../supabaseClient');

const createProject = async (name, description, url) => {
    return await supabase
        .from('Projects')
        .insert({name, description, url});
};

const getAllProjects = async () => {
    return await supabase.from('Projects').select('*');
};

module.exports = { getAllProjects, createProject };