import { CHANGE_PHOTO } from './actionTypes';

const initialState = { picture: 'pictureFirst' };

const changePhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PHOTO:
            return { ...state, picture: action.payload };
        default:
            return state;
    }
};

export { changePhotoReducer };
