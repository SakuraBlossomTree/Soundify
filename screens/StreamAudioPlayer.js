import React, { useEffect, useState } from "react";
import { View , Text , ActivityIndicator, StyleSheet ,useColorScheme} from 'react-native';
import Silder from '@react-native-community/slider';
import TrackPlayer , { useProgress , RepeatMode, usePlaybackState , State, usePlayWhenReady } from "react-native-track-player";
// import SoundPlayer from 'react-native-sound-player';
import dark from "../colors"
import { IconButton ,Card , Modal, Portal , Button , PaperProvider} from "react-native-paper";

const StreamAudioPlayer = ({ route }) => {
    
    const { song_name,artist_name,artwork,stream,isLoading } = route.params;
    
    // const pipedSearchUrl = `https://youtube.com/results?search_query=${search}`;
    
    const [visible, setVisible] = useState(false);

    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'black', padding: 20}

    const [repeatMode , setRepeatMode] = useState(false);

    const [queue, setQueue] = useState([]);

    const [currentId , setCurrentId] = useState(0);

    const [printrepeatmode , setPrintRepeatMode] = useState("OFF");
    
    const { position, buffered, duration } = useProgress();

    const [seekPosition , setSeekPosition] = useState(0);

    const [currentTrackId, setCurrentTrackId] = useState(null);

    const [currentArtistName, setCurrentArtistName] = useState(null);
    
    const [currentSongArtwork, setCurrentSongArtwork] = useState("https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    
    const [nextTrack , setNextTrack] = useState(null);

    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

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

    const playbackState = usePlaybackState();

    const playerReady = usePlayWhenReady();

    const [isBuffering , setIsBuffering] = useState(false);

    const [isPlaying , setIsPlaying] = useState(false);

    useEffect(() => {

        if (playerReady && (playbackState === State.Buffering || playbackState === State.Loading)){

          setIsBuffering(true);  

        }
        else if (playerReady && !(playbackState === State.Error || playbackState === State.Buffering)){

            setIsBuffering(false);
            setIsPlaying(true);

        }
        else{

            setIsPlaying(false);

        }


   }, [playbackState])

    const addTrack = async (audioUrl , songname , artwork  , artistname) => {

        const newId = currentId + 1;

        await TrackPlayer.add({
        
            id: newId.toString(),
        
            url: audioUrl,
        
            title: songname,
        
            artist: artistname,
     
            artwork: artwork,

        });

        setQueue([...queue, { id: newId, title: songname, artist: artistname, artwork: artwork }]);

        setCurrentId(newId);

    }

    const togglePlayback = async () => {
        
        const trackname = await TrackPlayer.getActiveTrack();

        // console.log(trackname);

        setCurrentTrackId(trackname?.title);
  
        setCurrentArtistName(trackname?.artist);

        setCurrentSongArtwork(trackname?.artwork);

        const currenttrackplaying = await TrackPlayer.getActiveTrackIndex(); 

        const nexttrack = await TrackPlayer.getTrack(currenttrackplaying+1);
 
        // console.log(await TrackPlayer.getTrack(currentId-1));

        // console.log(currentId);

        // console.log(nexttrack?.title);

        setNextTrack(nexttrack?.title);

        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const playAudio = async () => {
        
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

        let newprintrepeatmode;
       
        if (!repeatMode){

            newprintrepeatmode = "ON"
            
            await TrackPlayer.setRepeatMode(RepeatMode.Track);

            setRepeatMode(true);

        }
        else{

            newprintrepeatmode = "OFF"

            await TrackPlayer.setRepeatMode(RepeatMode.Off);

            setRepeatMode(false);

        }

        setPrintRepeatMode(newprintrepeatmode);

    }
// <IconButton 
//
//                                     mode='contained'
//                                     icon='play'
//                                     onPress={()=>{playAudio()}}        
//                                 />
//
//                                 <IconButton 
//                                     
//                                     mode='contained'
//                                     icon='pause'
//                                     onPress={()=> pauseAudio()}        
//                         
//                                 />
    const getRepeatMode = async () => {

        console.log(await TrackPlayer.getRepeatMode());

    }

    const skipNext = async () => {

        await TrackPlayer.skipToNext();

    }

    const skipPrev = async () => {

        await TrackPlayer.skipToPrevious();

    }

    const saveToPlaylist = () => {

        console.log("Saving to Playlist");

    }

    useEffect(() => {

            console.log(route.params);

    }, [route.params])

    return (
        <PaperProvider>
            <View style={[{flex:1},isDarkTheme ? {backgroundColor: dark.dark.themeColor} : {backgroundColor: 'white'}]}>

                <View style={{ flex: 1, alignItems: 'center'}}>

                    {isLoading ? (
                        <ActivityIndicator size="large" />
                    ) : (

                        <>
                            
                            <Card>
                                <Card.Cover source={{ uri : currentSongArtwork}} style={{width: 200, height:200}}/>
                            </Card>
                            
                            <Text style={[{fontSize:15},isDarkTheme ? { color: 'white' }:{color:'white'}]}>{currentTrackId}</Text>

                            <Text style={[{fontSize:15},isDarkTheme ? { color: 'white' }:{color:'white'}]}>{currentArtistName}</Text>
                            
                            <Text style={[{fontSize:15},isDarkTheme ? { color: 'white' }:{color:'white'}]}>{position} seconds out of {duration} total</Text>
                    
                            <Text style={[{fontSize:15},isDarkTheme ? { color: 'white' }:{color:'white'}]}>buffer: {buffered} seconds buffered out of {duration} total</Text>

                            <Text style={{ color: 'white'}}>Next Song: {nextTrack}</Text>
                            
                            <Silder 
                                
                                style={{ width: 400 , height: 60 }}
                                minimumValue={0}
                                maximumValue={duration}
                                value={position}
                                onValueChange={(value) => setSeekPosition(value)}
                                onSlidingComplete={(value) => {

                                    TrackPlayer.seekTo(value);
                                    setSeekPosition(value);

                                }}


                            />
                            
                            <View style={styles.container}>

                                <View style={styles.playcontrols}>
                                
                                    <IconButton            
                                            
                                            icon='plus'
                                            onPress={() => addTrack(stream , song_name , artwork , artist_name)}
                                            mode='contained'

                                    />

                                    <IconButton 
                                   
                                        mode='contained'
                                        icon='skip-previous'
                                        onPress={() => skipPrev()}

                                    />
                                                    
                                    <IconButton
                                        mode="contained"
                                        icon={isPlaying ? ('pause') : ('play')}
                                        onPress={togglePlayback}
                                    />           

                                    <IconButton 

                                        mode='contained'
                                        icon='skip-next'
                                        onPress={() => skipNext()}

                                    />
                                    
                                    <IconButton 

                                        mode='contained'
                                        icon='stop'
                                        onPress={()=> stopAudio()}        
                            
                                    />
                                    
                                    <IconButton 

                                        mode='contained'
                                        icon={repeatMode ? ('repeat-once'):('repeat')}
                                        onPress={()=> toggleRepeatMode()}        
                                
                                    />
                                
                                </View>
                                
                            </View>

                            

                        </>

                        

                    )}
                    
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <Text>These are your playlists.</Text>
                                <Text></Text>
                            </Modal>
                        </Portal>
                   
                </View>
            </View>
        </PaperProvider>        
    );

};

const styles = StyleSheet.create({

    container: {

        justifyContent: 'space-evenly'

    },
       
    playcontrols: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5 

    }

})

export default StreamAudioPlayer;
