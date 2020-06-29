const express = require('express');
const app = express();
const update_notes = require('./rds');

const PORT = process.env.PORT || 4001;

app.get('/newnote', (req, res, next) => {
    update_notes(req.query.id, req.query.field, req.query.notes)
    res.send("Success!")
  });

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`)
})