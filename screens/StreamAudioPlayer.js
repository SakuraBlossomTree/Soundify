import React, { useEffect, useState } from "react";
import { View , Text , Button , ActivityIndicator, StyleSheet } from 'react-native';
import Silder from '@react-native-community/slider';
import { Streamdata } from "../hooks/Streamdata";
import TrackPlayer , { useProgress , RepeatMode } from "react-native-track-player";
// import SoundPlayer from 'react-native-sound-player';

const playAudio = async (audioUrl , songname , artwork  , artistname) => {
    
    await TrackPlayer.add({
    
        id: '1',
    
        url: audioUrl,
    
        title: songname,
    
        artist: artistname,
 
        artwork: artwork,

    });
  
    await TrackPlayer.play();
    
    
};

const pauseAudio = async () => {

    await TrackPlayer.pause();

}

const stopAudio = async () => {

    await TrackPlayer.reset();

    await TrackPlayer.remove(1);

}

const toggleRepeatMode = async () => {

    await TrackPlayer.setRepeatMode(RepeatMode.Track);

}

const getRepeatMode = async () => {

    console.log(await TrackPlayer.getRepeatMode());

}

const StreamAudioPlayer = ({ route }) => {
    
    const { search } = route.params;
    
    // const pipedSearchUrl = `https://youtube.com/results?search_query=${search}`;
   
    const streamDataResult = Streamdata(search);
   
    const { position, buffered, duration } = useProgress(100);

    const [seekPosition , setSeekPosition ] = useState(0);

    // const playaudio = () => {
    //
    //     try {
    //
    //         SoundPlayer.playUrl('https://proxy-piped.mha.fi/videoplayback?expire=1698385974&ei=1vs6ZdjsCcSOx_APrJSewAk&ip=129.151.195.107&id=o-AIgauHMULrZ5C4AADN194xd6i5CoorozRsI4OOIxzF-p&itag=139&source=youtube&requiressl=yes&mh=jd&mm=31%2C29&mn=sn-5go7ynl6%2Csn-5goeenes&ms=au%2Crdu&mv=m&mvi=4&pl=25&initcwndbps=263750&spc=UWF9f7j5J03TmIg-eFzewd6OCBGVItc&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=2158613&dur=353.825&lmt=1625754387656979&mt=1698363928&fvip=2&keepalive=yes&fexp=24007246&beids=24350018&c=ANDROID&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRgIhAPy2cXNzVj8YAhtvbDaB8W1CDbr6qh0OpIlI0MRqJWFmAiEAojHCaxy8Q7qwzX67rd5MYsv9_yvEC3htpKRZzTgiXKU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AK1ks_kwRgIhALrIL2UeCNsLqmaGXY5V3_IJtfM7Mlrp6CwVl6lVx_iQAiEAlYjMxRPHKwpncktSXj8tl2nR5vyxhMHMX5RPg7dNIJs%3D&cpn=t9VvPL7VBKQ32HgA&host=rr4---sn-5go7ynl6.googlevideo.com');
    //
    //
    //     } catch (e){
    // 
    //         console.log(`cannot play the sound file`, e)
    // 
    //     }

    return (
       
        <View style={{ flex: 1, alignItems: 'center'}}>

            {streamDataResult.isLoading ? (
                <ActivityIndicator size="large" />
            ) : (

                <>
                    <Text style={{ color: "#000000" }}>This is the stream audio player</Text>

                    <Text style={{ color: "#000000" }}>Track progress: {position} seconds out of {duration} total</Text>
            
                    <Text style={{ color: "#000000" }}>Buffered progress: {buffered} seconds buffered out of {duration} total</Text>

                    <Silder 
                        
                        style={{ width: 300 , height: 40 }}
                        minimumValue={0}
                        maximumValue={duration}
                        value={seekPosition}
                        onValueChange={(value) => setSeekPosition(value)}
                        onSlidingComplete={(value) => {

                            TrackPlayer.seekTo(value);
                            setSeekPosition(value);

                        }}


                    />
                    
                    <View style={styles.container}>

                        <View style={styles.playcontrols}>
                            
                            <Button 

                                onPress={()=>{playAudio(streamDataResult.stream , streamDataResult.song_name , streamDataResult.artwork , streamDataResult.artist_name)}}        
                                title="Play"
                        
                            />
            
                            <Button 

                                onPress={()=> pauseAudio()}        
                                title="Pause"
                    
                            />
                    
                            <Button 

                                onPress={()=> stopAudio()}        
                                title="Stop"
                    
                            />

                        </View>

                    
                        <Button 

                            onPress={()=> toggleRepeatMode()}        
                            title="Repeat"
                        
                        />
                
                        <Button 

                            onPress={()=> getRepeatMode()}        
                            title="Print Repeat Mode"
                        
                        />

                    </View>

                    

                </>

            )}

        </View>

               
    );

};

const styles = StyleSheet.create({

    container: {

        flex:0.3,
        justifyContent: 'space-evenly'

    },
       
    playcontrols: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10

    }

})

export default StreamAudioPlayer;
