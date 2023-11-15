import React, { useCallback, useState , useEffect } from "react";
import { View , Text , StyleSheet , Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import TrackPlayer from "react-native-track-player";

const LocalAudioPlayer = () => {

    const [songfile , setSongfile] = useState([]);
   
    useEffect(() => {
    
        setupPlayer();
    
    }, []);

    const handlesongfilepick = useCallback(async () => {

        try {
            
            const response = await DocumentPicker.pick({

                presentationStyle: 'fullScreen',
                type: [DocumentPicker.types.audio]
            });
            
            console.log(response);

            const track = {

                id: '2',
                url: response.uri, 
                title: response.name,
                artist: 'Unknown Artist',
                duration: 999999999,
                start: true,
            }

            await addTracks([track]);

            // await TrackPlayer.skip('2');

            await TrackPlayer.play();

            setSongfile(response);

        } catch (err) {
            
            console.error(err);

        }

    }, []);
      
    return (

        <View style={styles.maincontainer}>
            
            <Text style={styles.text}>This is the LocalAudioPlayer Screen</Text>
      
            {songfile.map((file, index) => ( 

                <Text
                    
                    key={index.toString()}
                    style={styles.text}
                    numberOfLines={1}
                    ellipsizeMode='middle'>
                    {file?.uri}
                </Text>

            ))}

            <Button 

                title="Import a Song"
                color="#841584"
                onPress={handlesongfilepick}

            />

        </View> 

    )
    

}

const styles = StyleSheet.create({

    maincontainer: {

        flex: 1,

        alignItems: 'center',

        justifyContent: 'center',

    },

    text: {

        color: "#000000",

        marginBottom: 50

    }


})

export default LocalAudioPlayer;
