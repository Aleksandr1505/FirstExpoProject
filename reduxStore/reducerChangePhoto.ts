import { CHANGE_PHOTO_ACTION } from './actionsChangePhoto';

const initialState = { picture: 'pictureFirst' };

const changePhoto = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_PHOTO_ACTION':
            return Object.assign({}, state, {
                picture: action.payload,
            })
        default:
            return state
    }
}

export { changePhoto };
