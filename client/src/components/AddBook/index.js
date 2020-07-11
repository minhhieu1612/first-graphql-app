import React from "react";
import "./index.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getAllAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

export default function AddBook() {
  const { error, data, loading } = useQuery(getAllAuthors);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form className="form-add-book">
      <div className="form-group">
        <label className="label" htmlFor="bookName">
          Book name:
        </label>
        <input
          className="form-control"
          type="text"
          name="bookName"
          id="bookName"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="bookGenre">
          Genre:
        </label>
        <input
          className="form-control"
          type="text"
          name="bookGenre"
          id="bookGenre"
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="bookAuthor">
          Author:
        </label>
        <select className="form-control" name="bookAuthor" id="bookAuthor">
          {data.authors.map(({ name, id }, index) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </form>
  );
}
