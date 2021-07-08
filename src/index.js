const { response } = require('express');
const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
    return response.json(['course 1', 'course 2', 'course 3']);
});

app.post('/courses', (request, reponse) => {
    return response.json(['course 1', 'course 2', 'course 3', 'course 4']);
});

app.put('/courses/:id', (request, response) => {
    return response.json(['course 6', 'course 2', 'course 3', 'course 4']);
});

app.patch('/courses/:id', (request, reponse) => {
    return response.json(['course 6', 'course 7', 'course 3', 'course 4']);
});

app.delete('/courses/:id', (request, reponse) => {
    return reponse.json(['course 6', 'course 2', 'course 4']);
});

app.listen(3333);