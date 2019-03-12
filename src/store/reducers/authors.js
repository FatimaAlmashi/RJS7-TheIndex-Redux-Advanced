import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true,
  filteredAuthors: []
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        // authors: state.authors.concat(action.payload),
        // filteredAuthors: state.filteredAuthors.concat(action.payload),
        authors: action.payload,
        loading: false,
        filteredAuthors: action.payload
      };
    case actionTypes.FILTER_AUTHORS:
      // const authors = state.authors;
      let newFilteredAuthors = state.authors.filter(auth => {
        return `${auth.first_name} ${auth.last_name}`
          .toLowerCase()
          .includes(action.payload);
      });
      return {
        ...state,
        filteredAuthors: newFilteredAuthors
      };
    default:
      return state;
  }
};

export default authorsReducer;
