import React from "react";
import { View , StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const PipedAudioPlayer = ({ audioUrl }) => {

        return (

            <View style={{ flex: 1 }}>
                
                <WebView source={{ uri: audioUrl }} style={styles.webview}/>

            </View>

        )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,

    },

    webview: {

        flex: 1,

    }

})

export default PipedAudioPlayer;
