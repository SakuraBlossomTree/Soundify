/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer , { Capability , AppKilledPlaybackBehavior } from 'react-native-track-player';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require('./service'));

async function setup() {
    await TrackPlayer.setupPlayer();
    // Add your custom initialization code here if needed
   
    await TrackPlayer.updateOptions({
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause],
        android: {
            appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        }
    });

}

setup();
