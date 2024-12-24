const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');
const { ruruHTML } = require('ruru/server');

const app = express();

const graphqlHandler = createHandler({
  schema: schema
});

app.use('/graphql', graphqlHandler);

// Serve Ruru GraphQL IDE
app.get('/playground', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(ruruHTML({ endpoint: '/graphql' }));
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
