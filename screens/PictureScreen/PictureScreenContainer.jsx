import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PictureScreenComponent } from './PictureScreenComponent';
import { useThunkDispatch } from '../../reduxStore/store';
import { changePhotoAction } from '../../reduxStore/photo/actions';

const PictureScreenContainer = () => {
    const { picture } = useSelector((state) => state.changePhotoReducer);

    const action = changePhotoAction();
    const images = {
        pictureFirst: require('../../assets/architectureBlueBuildings.jpg'),
        pictureSecond: require('../../assets/personWearing.jpg'),
        pictureThird: require('../../assets/womanPlatformCity.jpg'),
    };

    useEffect(() => {
        return () => {};
    }, []);
    return <PictureScreenComponent image={images[picture]} dispatch={action} />;
};

export { PictureScreenContainer };
