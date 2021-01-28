import express from 'express';
import ntsc from 'ntypescript'

const app = express();

app.get('/', (request, response) =>{
    return response.json({ message: 'ola mundo!' });
})

app. listen(3333);