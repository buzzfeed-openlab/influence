import {
  GET_INTERESTS_REQUEST,
  GET_INTERESTS_SUCCESS,
  GET_INTERESTS_FAILURE } from 'constants/index';


export default function topic(state = {
  interests: [],
}, action) {
  switch (action.type) {
    case GET_INTERESTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_INTERESTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        interests: action.req.data
      });
    case GET_INTERESTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state;
  }
}
