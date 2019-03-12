import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetch_author_detail = authorID => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://the-index-api.herokuapp.com/api/authors/${authorID}/`
      );
      const author = res.data;
      dispatch({
        type: actionTypes.FETCH_AUTHOR_DETAIL,
        payload: author
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
