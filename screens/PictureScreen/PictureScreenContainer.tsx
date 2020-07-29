import React, { useEffect } from 'react';
import { PictureScreenComponent } from './PictureScreenComponent';

const PictureScreenContainer = (props, {image}) => {
    const pic = props.route.name;
    const images = {
        pictureFirst: require('../../assets/architectureBlueBuildings.jpg'),
        pictureSecond: require('../../assets/personWearing.jpg'),
        pictureThird: require('../../assets/womanPlatformCity.jpg')
    }

    if(pic == 'First Picture') {
        image = images.pictureFirst
    } else if (pic === 'Second Picture') {
        image = images.pictureSecond
    } else {
        image = images.pictureThird
    }

    useEffect(() => {
            console.log('Test');
        return () => {
            console.log('UnMount');
        }
    }, []);
    return (
        <PictureScreenComponent image={image}/>
    )
}

export { PictureScreenContainer };

