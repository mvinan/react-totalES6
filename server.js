import express from 'express';
import React from 'react';
import Home from './views/home';
import engine from 'react-engine';
import path from 'path'

const app = express();

app.engine('.jsx', engine.server.create());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.set('view', engine.expressView);

app.get('/', (req, res) => res.render('home'));

app.listen(3000);
