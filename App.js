import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { store } from './reduxStore/store';

const Stack = createStackNavigator();

//@Components
import HomeScreenComponent from './screens/HomeScreen'
import PictureScreenComponent from './screens/PictureScreen';

export default function App() {


    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreenComponent}/>
                <Stack.Screen name="Pictures" component={PictureScreenComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}
