export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_POSTS: 'SET_POSTS',
};

export const reducer = (state, action) => {
  console.log('Action ', action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};
