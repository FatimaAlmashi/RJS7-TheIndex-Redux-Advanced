import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import * as actionCreators from "./store/actions/index";

class AuthorsList extends Component {
  // filterAuthors = query => {
  //   query = query.toLowerCase();
  //   let filteredAuthors = this.props.authors.filter(author => {
  //     return `${author.first_name} ${author.last_name}`
  //       .toLowerCase()
  //       .includes(query);
  //   });
  //   this.setState({ filteredAuthors });
  // };

  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        {/* <SearchBar changeHandler={this.filterAuthors} /> */}
        <SearchBar />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
