const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema");
const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => {
  console.log("server listening on port: 8000");
});
