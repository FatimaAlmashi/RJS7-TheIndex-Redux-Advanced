import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// Components
import BookTable from "./BookTable";
import Loading from "./Loading";
import * as actionCreators from "./store/actions/index";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class AuthorDetail extends Component {
  componentDidMount() {
    // const author_id = this.props.onFetchAuthorDetail(this.props.match.params.authorID);
    this.props.onFetchAuthorDetail(this.props.match.params.authorID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.auth;
      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.rootAuthor.author,
    loading: state.rootAuthor.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAuthorDetail: authorID =>
      dispatch(actionCreators.fetch_author_detail(authorID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
