import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const PictureScreenComponent = ({ image, dispatch }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Press one of three buttons to see picture</Text>
            <Image source={image} style={styles.picture} />
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttons} onPress={() => dispatch('pictureFirst')}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => dispatch('pictureSecond')}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => dispatch('pictureThird')}>
                    <Text>3</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export { PictureScreenComponent };
