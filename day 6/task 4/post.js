const express = require('express');
const app = express();
const port = 3000;
const body = require('./body.json')

app.use(express.json());

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(newUser);
    res.json({ message: "User added" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
