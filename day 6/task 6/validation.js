const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const USERS_FILE = 'users.json';
const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};
const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});
app.get('/users', (req, res) => {
    res.json(getUsers());
});
app.get('/users/:id', (req, res) => {
    const users = getUsers();
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});
app.post('/users', (req, res) => {
    const users = getUsers();
    const { name } = req.body;
    
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: "Name is required and must be a string" });
    }
    
    const newUser = { id: users.length ? users[users.length - 1].id + 1 : 1, name };
    users.push(newUser);
    saveUsers(users);
    res.json({ message: "User added" });
});
app.put('/users/:id', (req, res) => {
    let users = getUsers();
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: "Name is required and must be a string" });
    }
    
    users[userIndex] = { ...users[userIndex], name };
    saveUsers(users);
    res.json({ message: "User updated" });
});
app.delete('/users/:id', (req, res) => {
    let users = getUsers();
    const userId = parseInt(req.params.id);
    const newUsers = users.filter(u => u.id !== userId);
    if (newUsers.length !== users.length) {
        saveUsers(newUsers);
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
