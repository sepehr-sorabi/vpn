const express = require('express');
const app = express();

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // authenticate user
        // generate access token
        const accessToken = generateAccessToken(username);
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

function generateAccessToken(username) {
    // generate access token
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
