import React, { useState } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen.js';
import AudioPlayer from './screens/AudioPlayer.js';
import Settings from './screens/Settings.js';
import Playlist from "./screens/Playlist.js";
import LocalAudioPlayer from "./screens/LocalAudioPlayer.js";
import StreamAudioPlayer from "./screens/StreamAudioPlayer.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import dark from "./colors";

const Drawer = createDrawerNavigator();

export const ThemeContext = React.createContext();

const App = () => {
    const [theme, setTheme] = useState(DefaultTheme);

    return (
    
        <SafeAreaView style={{ flex: 1 }}>
      
            <PaperProvider>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <NavigationContainer navigationOptions>
                        <Drawer.Navigator
                            initialRouteName={'Home'}
                            
                            screenOptions={{
                                drawerStyle:{
                                    backgroundColor: dark.dark.themeColor, // Set the background color of the drawer
                                    color: 'white', // Set text color in the drawer
                                },
                                drawerType:"slide",
                                drawerLabelStyle:{color: 'white'},
                                drawerActiveBackgroundColor:"#6272a4"
                            }} 
                        >
                          <Drawer.Group>
                            <Drawer.Screen
                              name="Home"
                              component={HomeScreen}
                              options={{
                                title: 'Home Screen',
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />

                            <Drawer.Screen
                              name="AudioPlayer"
                              component={AudioPlayer}
                              options={{
                                title: 'Audio Player',
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />

                            <Drawer.Screen
                              name="Playlist"
                              component={Playlist}
                              options={{
                                title: 'Your Playlists',
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />

                            <Drawer.Screen
                              name="Settings"
                              component={Settings}
                              options={{
                                title: 'Settings Screen',
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />

                            <Drawer.Screen
                              name="LocalAudioPlayer"
                              component={LocalAudioPlayer}
                              options={{
                                title: 'Your Shit Local Audio Player',
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />

                            <Drawer.Screen
                              name="StreamAudioPlayer"
                              component={StreamAudioPlayer}
                              options={{
                                title: "Finally it is wokring yeeee!",
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                              }}
                            />
                          </Drawer.Group>
                        </Drawer.Navigator>
                    </NavigationContainer>
                </ThemeContext.Provider>
            </PaperProvider>
        </SafeAreaView>
    );
}

export default App;

