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
import { MD3Colors, PaperProvider } from "react-native-paper";
import dark from "./colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GearIcon from 'react-native-vector-icons/Octicons';

// const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export const ThemeContext = React.createContext();

const App = () => {
    const [theme, setTheme] = useState(DefaultTheme);

    return (
    
        <SafeAreaView style={{ flex: 1 }}>
      
            <PaperProvider>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <NavigationContainer navigationOptions>
                        <Tab.Navigator
                            initialRouteName={'Home'}
                            
                            screenOptions={{
                                activeTintColor: dark.dark.themeColor
                            }} 
                        >
                          <Tab.Group>
                            <Tab.Screen
                              name="Home"
                              component={HomeScreen}
                              options={{
                                tabBarLabel: 'Home Screen',
                                tabBarStyle: {
                                    backgroundColor: dark.dark.themeColor,
                                },
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <Icon name="home" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90

                              }}
                            />

                            <Tab.Screen
                              name="AudioPlayer"
                              component={AudioPlayer}
                              options={{
                                title: 'Video Player',
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <Icon name="video" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90

                              }}
                            />

                            <Tab.Screen
                              name="Playlist"
                              component={Playlist}
                              options={{
                                title: 'Playlists',
                                headerStyle: {
                                  backgroundColor: dark.dark.themeColor,// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <Icon name="playlist-music" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90

                              }}
                            />

                            <Tab.Screen
                              name="StreamAudioPlayer"
                              component={StreamAudioPlayer}
                              options={{
                                title: "Music Player",
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <Icon name="play" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90
                              }}
                            />

                            <Tab.Screen
                              name="LocalAudioPlayer"
                              component={LocalAudioPlayer}
                              options={{
                                title: 'Local Audio Player',
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <Icon name="file-music" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90
                              }}
                            />

                            <Tab.Screen
                              name="Settings"
                              component={Settings}
                              options={{
                                title: 'Settings',
                                headerStyle: {
                                  backgroundColor:  dark.dark.themeColor,/// Set the background color of the header
                                },
                                headerTintColor: 'white', // Set text color in the header
                                tabBarIcon: ({ color , size }) => {
                                    
                                    return <GearIcon name="gear" color={MD3Colors.primary80} size={20} /> 
                                
                                },

                                tabBarActiveTintColor: MD3Colors.primary90

                              }}
                            />
                          </Tab.Group>
                        </Tab.Navigator>
                    </NavigationContainer>
                </ThemeContext.Provider>
            </PaperProvider>
        </SafeAreaView>
    );
}

export default App;

