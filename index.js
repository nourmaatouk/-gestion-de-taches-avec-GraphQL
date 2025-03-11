const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { json } = require('body-parser');
const { addResolversToSchema } = require('@graphql-tools/schema');
const taskSchemaPromise = require('./taskSchema');
const taskResolver = require('./taskResolver');

const app = express();

async function setupServer() {
  const taskSchema = await taskSchemaPromise;
  const schemaWithResolvers = addResolversToSchema({ schema: taskSchema, resolvers: taskResolver });

  const server = new ApolloServer({ schema: schemaWithResolvers });
  await server.start();

  app.use('/graphql', json(), expressMiddleware(server));

  app.listen(5000, () => console.log(`🚀 Server running on http://localhost:5000/graphql`));
}

setupServer();
