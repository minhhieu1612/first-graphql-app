import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// apollo setup
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2 className="text-center">My List Book will read 😜</h2>
        <BookList />
        <hr className="separator" />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
