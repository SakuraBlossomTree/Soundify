import React from "react";
// import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen.js';
import AudioPlayer from './screens/AudioPlayer.js';
import Settings from './screens/Settings.js';
import Playlist from "./screens/Playlist.js";
import LocalAudioPlayer from "./screens/LocalAudioPlayer.js";
import StreamAudioPlayer from "./screens/StreamAudioPlayer.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();

const App = () => {

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>

            <NavigationContainer>
                
                 <Drawer.Navigator initialRouteName={'Home'}> 

                    <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/>

                    <Drawer.Screen name="AudioPlayer" component={AudioPlayer} options={{title: 'Audio Player'}}/>

                    <Drawer.Screen name="Playlist" component={Playlist} options={{title: 'Your Playlists'}} />

                    <Drawer.Screen name="Settings" component={Settings} options={{title: 'Settings Screen'}} />
                    
                    <Drawer.Screen name="LocalAudioPlayer" component={LocalAudioPlayer} options={{title: 'Your Shit Local Audio Player'}} />

                    <Drawer.Screen name="StreamAudioPlayer" component={StreamAudioPlayer} options={{title: "The Usual yada yada title"}} />
                
                </Drawer.Navigator> 

            </NavigationContainer>

        </SafeAreaView>

            

    )

}

export default App;
