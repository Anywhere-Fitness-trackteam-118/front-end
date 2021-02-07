import {
    GET_CLASSES,
    ADD_CLASSES,
    DELETE_CLASSES,
    UPDATE_CLASSES,
} from './Types';

export default (state, action) => {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                classes: action.payload
            };

        case ADD_CLASSES:
            return {
                ...state,
                classes: [action.payload, ...state.classes]
            };

        case DELETE_CLASSES:
            return {
                ...state,
                classes: state.classes.filter(classes => classes.id !== action.payload)
            };

        case UPDATE_CLASSES:
            return {
                ...state,
                classes: state.classes.map(classes =>
                    classes.id === action.payload.id ? action.payload : classes
                )
            };

        default:
            return state;
    }
};