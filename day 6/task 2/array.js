const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ]);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
