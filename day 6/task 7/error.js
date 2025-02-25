const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const USERS_FILE = 'users.json';

app.use(express.json());

const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE, 'utf8') || '[]');
const writeUsers = (users) => fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

app.post('/users', (req, res) => {
    const users = readUsers(), { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name required" });
    users.push({ id: users.length + 1, name });
    writeUsers(users);
    res.json({ message: "User added" });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
