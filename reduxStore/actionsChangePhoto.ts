export const CHANGE_PHOTO_ACTION = 'CHANGE_PHOTO_ACTION';

export const changePhotoAction = (picture) => {
    return {
        type: 'CHANGE_PHOTO_ACTION',
        payload: picture,
    };
};
