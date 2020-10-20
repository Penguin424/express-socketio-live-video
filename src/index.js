const http = require('./app.js');

process.env.PORT = process.env.PORT || 3000;

http.listen(process.env.PORT, () => {
    console.log('server on port 3000');
});