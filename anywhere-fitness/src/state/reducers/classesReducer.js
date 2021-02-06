import { LOADING, CLASSES_SUCCESS, ERROR } from "../actions/index";

const initialState = {
  classes: {},
  loading: false,
  error: "",
};

export function classesReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        parts: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
