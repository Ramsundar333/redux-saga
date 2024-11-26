import * as types from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //Load Reducer
    case types.LOAD_USERS_START:
      return { ...state, loading: true };

    case types.LOAD_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case types.LOAD_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    //Create Reducer
    case types.CREATE_USER_START:
      return { ...state, loading: true };

    case types.CREATE_USER_SUCCESS:
      return { ...state, loading: false };

    case types.CREATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    //Delete Reducer
    case types.DELETE_USER_START:
      return { ...state, loading: true };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    case types.DELETE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    //Update Reducer
    case types.UPDATE_USER_START:
      return { ...state, loading: true };

    case types.UPDATE_USER_SUCCESS:
      return { ...state, loading: false };

    case types.UPDATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
