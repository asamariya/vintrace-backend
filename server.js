const app = require('./app');
const PORT = 5000;

// launch server
app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
