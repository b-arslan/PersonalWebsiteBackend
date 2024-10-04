const express = require('express');
const cors = require('cors');
const { loginUser } = require('./controllers/authController');
const { createProject, getProjects } = require('./controllers/projectController');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/login', loginUser);
app.post('/api/createProject', createProject);
app.get('/api/getProjects', getProjects);

app.listen(9001, () => {
    console.log(`Server running on port 9001`);
});