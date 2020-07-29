import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

//@Components
import HomeScreenComponent from './screens/HomeScreen'
import PictureScreenComponent from './screens/PictureScreen';

export default function App() {


    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreenComponent}/>
            <Stack.Screen name="First Picture" component={PictureScreenComponent}/>
            <Stack.Screen name="Second Picture" component={PictureScreenComponent}/>
            <Stack.Screen name="Third Picture" component={PictureScreenComponent}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pictures: {
        width: 300,
        height: 300,
        marginBottom: 20
    }
})




