/** SERVER EN NODEJS Y EXPRESS */
const express = require('express');
const morgan = require('morgan');

const indexRoutes = require('./routes/index.routes');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('Go to http://localhost:3000/api');
});