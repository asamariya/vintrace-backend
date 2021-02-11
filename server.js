const app = require('./app');
const PORT = 5000;

// Launch server
app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));
