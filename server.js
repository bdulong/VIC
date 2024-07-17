const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let ideas = [];
let users = [];

app.get('/api/ideas', (req, res) => {
    res.json(ideas);
});

app.post('/api/ideas', (req, res) => {
    const { content } = req.body;
    if (content) {
        ideas.push({ content });
        res.status(201).json({ message: 'Idée ajoutée avec succès' });
    } else {
        res.status(400).json({ message: 'Le contenu de l\'idée est requis' });
    }
});

app.post('/login', (req, res) => {
    const { firstName, lastName, email } = req.body;
    if (firstName && lastName && email) {
        users.push({ firstName, lastName, email });
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } else {
        res.status(400).json({ message: 'Tous les champs sont requis' });
    }
});

app.get('/login', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Serveur backend démarré sur http://localhost:${port}`);
});