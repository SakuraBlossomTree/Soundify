import React, {useState} from 'react';
import { View,useColorScheme } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider , TextInput , Card , IconButton} from 'react-native-paper';
import dark from "../colors";
import { PipedVideoId } from '../hooks/PipedVideoId';

const Playlist = ({ navigation,route }) => {

    
    const value = route.params;
    const [visible, setVisible] = useState(false);
    const [selectedurl, setSelectedUrl] = useState("");
    const [songurl , setSongurl] = useState("8.8");

    let song_name = "8.8";
    const [songname , setSongname] = useState("");
    const [stream, setStream] = useState(null);
    const [artist_name, setArtistName] = useState("");
    const [artwork, setArtwork] = useState("https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const [currentSongArtwork, setCurrentSongArtwork] = useState("https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const playSong = async () => {

        try {
                
            const url = `https://pipedapi.smnz.de/search?q=8.8&filter=all`
            
            const response = await fetch(url);

            const responseData = await response.json();

            console.log(responseData);

            const songurl = "https://piped.video" + responseData.items[0].url;

            // const artwork = responseData.items[0].thumbnail;

            setSongurl(songurl);

            const videoid = PipedVideoId(songurl);

            // console.log(videoid);

            const streams =`https://pipedapi.smnz.de/streams/${videoid}`;

            const responsestream = await fetch(streams);
                
            const responsestreamdata = await responsestream.json();

            // console.log(responsestreamdata);
                
            const artist_name = responsestreamdata.uploader;

            // const song_name = responsestreamdata.title; 

            const song_name = responsestreamdata.title;

            const artwork = responsestreamdata.thumbnailUrl;
                
            // const artworkdata = artworkurl + `/video/${videoid}`;

            // const artworkstream = await fetch(artworkdata);

            // const artworkstreamdata = await artworkstream.json();

            // const artwork = artworkstreamdata.thumbnails[1].url;

            const stream = responsestreamdata.audioStreams[0].url;
                
            console.log(stream); 

            console.log(artist_name);

            console.log(song_name);

            console.log(artwork);

            setSongname(songname);

            setArtistName(artist_name);

            setArtwork(artwork);

            setStream(stream); 
        
        } catch (error) {

            console.error(error);

        }

        

    }

    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

    return (
        
        <PaperProvider>
            <View style={[{flex:1},isDarkTheme ? {backgroundColor: dark.dark.themeColor} : {backgroundColor: 'white'}]}>
                <Portal>
                    
                    <Modal visible={visible} onDismiss={hideModal}>
                   
                        <Card style={{margin:10}}>
                            <Card.Title 
                                title="Sample Playlist"
                            />
                            <Card.Cover source={{ uri : currentSongArtwork}} />
                            <Card.Content>
                                <Text>{song_name}</Text>
                            </Card.Content>                
                            <Card.Actions>
                                <IconButton icon='plus' mode='contained' onPress={playSong} />
                                <IconButton icon='play' mode="contained" onPress={() => {

                                    navigation.navigate('StreamAudioPlayer', {song_name,artist_name,artwork,stream}) 

                                }} />
                            </Card.Actions>
                                

                        </Card>

                    </Modal>
                    
                </Portal>
                <Text>Your Playlists</Text>


                <Button style={{marginTop: 30}} onPress={showModal}>
                    Show
                </Button>
            </View>
        </PaperProvider>
        
    )

}

export default Playlist;
