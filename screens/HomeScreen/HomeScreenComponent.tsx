import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const HomeScreenComponent = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pictures</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('First Picture')} >
                <Text>First Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Second Picture')}  >
                <Text>Second Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Third Picture')} >
                <Text>Third Picture</Text>
            </TouchableOpacity>
        </View>
   );
 }

export { HomeScreenComponent };
