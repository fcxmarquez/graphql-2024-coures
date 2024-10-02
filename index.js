const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const schema = require('./schema/schema');
const { createHandler } = require('graphql-http/lib/use/express');

const app = express();

const graphqlHandler = createHandler({
    schema: schema,
});

app.use('/graphql', graphqlHandler);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
