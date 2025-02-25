const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name: "vishnu" },
    { id: 2, name: "abi" }
];

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id?', (req, res) => {
    const userId = req.params.id ? parseInt(req.params.id) : 1;
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
