import { Search } from '../util/api';



export function searchAction(term, location, sortBy) {

  Search.search(term, location, sortBy).then(businesses => {
    return {
      type: 'SEARCH_ACTION',
      payload: businesses
    };
  });
}




