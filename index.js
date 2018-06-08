const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/dist', express.static('dist'));

app.listen(8000);

console.log('Running Multigress at *:8000');