// require express
const express = require('express');

// create express app
const app = express();

// require express-graphql
const graphqlHTTP = require('express-graphql');

// require schema
const schema = require('./schema');

// app port
const PORT = 3000;

// set up express with graphqlHTTP
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log('Express server is running on : http://localhost:' +PORT);
});
