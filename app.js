const express = require('express');

const yearRoutes = require('./routes/year-routes');
const regionRoutes = require('./routes/region-routes');
const varietyRoutes = require('./routes/variety-routes');
const yearVarietyRoutes = require('./routes/year-variety-routes');
const searchRoutes = require('./routes/search-routes');

//Set up express
const app = express();
app.use(express.json());

// Allow CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// Set up routes
app.use('/api/breakdown/year', yearRoutes);
app.use('/api/breakdown/region', regionRoutes);
app.use('/api/breakdown/variety', varietyRoutes);
app.use('/api/breakdown/year-variety', yearVarietyRoutes);
app.use('/api/breakdown/search/', searchRoutes);

module.exports = app;
