import { combineReducers } from 'redux';
import { changePhotoReducer } from './photo/reducer';

const rootReducer = combineReducers({
    changePhotoReducer,
});

export default rootReducer;
