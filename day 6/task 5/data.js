const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const USERS_FILE = 'users.json';

// Read users from JSON file
const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

// Write users to JSON file
const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

// Get all users
app.get('/users', (req, res) => {
    res.json(getUsers());
});

// Get user by ID
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

// Add new user
app.post('/users', (req, res) => {
    const users = getUsers();
    const newUser = req.body;
    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(newUser);
    saveUsers(users);
    res.json({ message: "User added" });
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    let users = getUsers();
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        saveUsers(users);
        res.json({ message: "User updated" });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Delete user by ID
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
