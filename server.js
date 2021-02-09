const express = require('express');

const yearRoutes = require('./routes/year-routes');
const regionRoutes = require('./routes/region-routes');
const varietyRoutes = require('./routes/variety-routes');
const yearVarietyRoutes = require('./routes/year-variety-routes');
const searchRoutes = require('./routes/search-routes');

//set up express
const app = express();
app.use(express.json());

const PORT = 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// set up routes
app.use('/api/breakdown/year', yearRoutes);
app.use('/api/breakdown/region', regionRoutes);
app.use('/api/breakdown/variety', varietyRoutes);
app.use('/api/breakdown/year-variety', yearVarietyRoutes);
app.use('/api/breakdown/search/', searchRoutes);

// launch server
app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
