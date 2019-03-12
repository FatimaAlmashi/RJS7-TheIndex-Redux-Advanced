import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
class SearchBar extends Component {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.target.value });
    this.props.onFilterAuthor(event.target.value);
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     auth: state.rootAuthor.counter,
//     auths: state.rootAuthors.authors
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onFilterAuthor: query => dispatch(actionCreators.filter_authore(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
