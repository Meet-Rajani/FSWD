const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.use((req, res, next) => {
    const ip = req.ip;
    const timestamp = new Date().toISOString();
    const logData = `${timestamp} - ${ip}\n`;

    fs.appendFile('visits.log', logData, (err) => {
        if (err) {
            console.error('Error logging visit:', err);
        }
    });

    next();
});

app.get('/logs', (req, res) => {
    fs.readFile('visits.log', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read log file' });
        } else {
            const logs = data.split('\n').filter(log => log).map(log => {
                const [timestamp, ip] = log.split(' - ');
                return { timestamp, ip };
            });
            res.json(logs);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
