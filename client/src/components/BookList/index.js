import React from "react";
import "./index.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getAllBooks = gql`
  {
    books {
      name
      genre
    }
  }
`;

export default function BookList() {
  const { error, data, loading } = useQuery(getAllBooks);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="wrap-list-book">
      {data.books.map(({ name, genre }, index) => (
        <div className="wrap-book" key={index}>
          <p className="book-name">{name}</p>
          <p className="book-genre">{genre}</p>
        </div>
      ))}
    </div>
  );
}
