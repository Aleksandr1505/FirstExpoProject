import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const PictureScreenComponent = ({image}) => {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
          <Image source={image} style={styles.pictures}/>
          <TouchableOpacity style={styles.buttonBack} onPress={()=> navigation.goBack()} >
              <Text >Go Back</Text>
          </TouchableOpacity>
      </View>
    );
}

export  { PictureScreenComponent };