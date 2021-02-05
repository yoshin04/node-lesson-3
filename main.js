const express = require('express');
const app = express();
const path = require('path');
const quizRoutes = require('./routes/quizRoutes');
const layouts = require('express-ejs-layouts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(layouts);
app.use('/quiz', quizRoutes);

app.listen(3000);