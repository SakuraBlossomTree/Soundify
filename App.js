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
import { PaperProvider , useTheme } from "react-native-paper";

const Drawer = createDrawerNavigator();

const App = () => {

    const theme = useTheme();

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.primary}}>
        
            <PaperProvider>
                
                <NavigationContainer>
                
                    <Drawer.Navigator initialRouteName={'Home'}> 

                        <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home Screen'}}/>

                        <Drawer.Screen name="AudioPlayer" component={AudioPlayer} options={{title: 'Audio Player'}}/>

                        <Drawer.Screen name="Playlist" component={Playlist} options={{title: 'Your Playlists'}} />

                        <Drawer.Screen name="Settings" component={Settings} options={{title: 'Settings Screen'}} />
                    
                        <Drawer.Screen name="LocalAudioPlayer" component={LocalAudioPlayer} options={{title: 'Your Shit Local Audio Player'}} />

                        <Drawer.Screen name="StreamAudioPlayer" component={StreamAudioPlayer} options={{title: "Finally it is wokring yeeee!"}} />
                
                    </Drawer.Navigator> 

                </NavigationContainer>

            </PaperProvider>
        
        </SafeAreaView>

            

    )

}

export default App;
