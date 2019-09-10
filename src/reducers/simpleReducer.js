/* 
  src/reducers/simpleReducer.js
*/

const initialState = {
  businesses: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ACTION':
      return { ...action.payload }
    default:
      return state
  }
}
