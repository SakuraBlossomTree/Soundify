import React from "react";
// import { View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen.js';
import AudioPlayer from './screens/AudioPlayer.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {

    return (

            <Drawer.Navigator>

                <Drawer.Screen name="Home" component={HomeScreen} />

                <Drawer.Screen name="AudioPlayer" component={AudioPlayer}/>

            </Drawer.Navigator> 

    )

}

export default App;
