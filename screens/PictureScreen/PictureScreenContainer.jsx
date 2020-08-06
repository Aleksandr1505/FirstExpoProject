import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PictureScreenComponent } from './PictureScreenComponent';
import { useThunkDispatch } from '../../reduxStore/store';

const PictureScreenContainer = () => {
    const { picture } = useSelector((state) => state.changePhotoReducer);

    const dispatch = useThunkDispatch();
    const images = {
        pictureFirst: require('../../assets/architectureBlueBuildings.jpg'),
        pictureSecond: require('../../assets/personWearing.jpg'),
        pictureThird: require('../../assets/womanPlatformCity.jpg'),
    };

    useEffect(() => {
        console.log('Test');
        return () => {
            console.log('UnMount');
        };
    }, []);
    return <PictureScreenComponent image={images[picture]} dispatch={dispatch} />;
};

export { PictureScreenContainer };
