import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('Get Request');

    res.send('Hello from Visual Studio Code');
})

app.get('/admin', (req, res) => {
    console.log('This is Admin Page');

    res.send('Welcome to admin page');
})

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});