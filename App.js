import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Pictures</Text>
            <Button title={"First Picture"} onPress={() => navigation.navigate('First Picture')}> </Button>
            <Button title={"Second Picture"} onPress={() => navigation.navigate('Second Picture')}> </Button>
            <Button title={"Third Picture"} onPress={() => navigation.navigate('Third Picture')}> </Button>
        </View>
    );
}


function FirstPictureScreen ({navigation}) {
    useEffect(() => {
        console.log('Test');
        return () => {
            console.log('UnMount');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://images.pexels.com/photos/356968/pexels-photo-356968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={styles.pictures}/>
            <Button title='Go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}

function SecondPictureScreen ({navigation}) {
    useEffect(() => {
        console.log('Test');
        return () => {
            console.log('UnMount');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://images.pexels.com/photos/2416602/pexels-photo-2416602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={styles.pictures}/>
            <Button title='Go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}

function ThirdPictureScreen ({navigation}) {
    useEffect(() => {
        console.log('Test');
        return () => {
            console.log('UnMount');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{uri:'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={styles.pictures}/>
            <Button title='Go back' onPress={() => navigation.goBack()}/>
        </View>
    );
}


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="First Picture" component={FirstPictureScreen}/>
                <Stack.Screen name="Second Picture" component={SecondPictureScreen}/>
                <Stack.Screen name="Third Picture" component={ThirdPictureScreen}/>
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




