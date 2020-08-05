import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const HomeScreenComponent = () => {
    const navigation = useNavigation();
    var i = 4;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pictures</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pictures')}>
                <Text>Pictures</Text>
            </TouchableOpacity>
        </View>
   );
 }

export { HomeScreenComponent };
