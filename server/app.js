const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("./schema");
const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://gql-minhhieu:16123456z@cluster0.97hed.mongodb.net/graphql?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(3001, () => {
  console.log("server listening on port: 3001");
});
