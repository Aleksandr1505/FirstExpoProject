import { CHANGE_PHOTO } from './actionTypes';

const changePhotoAction = (picture) => {
    return {
        type: CHANGE_PHOTO,
        payload: picture,
    };
};

export { changePhotoAction };
