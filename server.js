const express = require('express');

const yearRoutes = require('./routes/year-routes');
const regionRoutes = require('./routes/region-routes');
const varietyRoutes = require('./routes/variety-routes');
const yearVarietyRoutes = require('./routes/year-variety-routes');

//set up express
const app = express();
app.use(express.json());

const PORT = 5000;

// set up routes
app.use('/api/breakdown/year', yearRoutes);
app.use('/api/breakdown/region', regionRoutes);
app.use('/api/breakdown/variety', varietyRoutes);
app.use('/api/breakdown/year-variety', yearVarietyRoutes);

// launch server
app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
