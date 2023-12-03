import { useState , useEffect, useContext }from "react";
import { StyleSheet, View ,Dimensions} from "react-native";
import { IconButton, Card, Searchbar } from "react-native-paper";
import { PipedVideoId } from "../hooks/PipedVideoId";
import dark from '../colors'

const screenwidth = Dimensions.get('window').width;

const Search = ({ navigation , route })  => {

    const [search , setSearch] = useState('');

    const { value } = route.params;

    const [songurl , setSongurl] = useState("8.8");

    const [stream, setStream] = useState(null);

    const [artist_name , setArtistName] = useState("");

    const [artwork, setArtwork] = useState("https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
   
    const [song_name , setSongName] = useState("");

    const [isLoading , setIsLoading] = useState(true);

    const onChangeSearch = (search) => setSearch(search); 

    // const songUrl = "https://piped.video/results?search_query=" + search
    
    // const url = `https://pipedapi.kavin.rocks/search?q=${search}&ffilter-all`;
    
    const artworkurl = "https://aiotube.deta.dev";
    
    const pipedyt = "https://api.piped.yt"

    const garudalinuxpiped = "https://piped-api.garudalinux.org"

    const osphostpiped = "https://pipedapi.osphost.fi"

    const plutopiped = "https://api.watch.pluto.lat"

    const mhapiped = "https://api-piped.mha.fi"

    const kavinrockspipedlibre = "https://pipedapi-libre.kavin.rocks"

    const gameytpiped = "https://piped-api.game.yt"

    const lunaricupiped = "https://piped-api.lunar.icu"

    const palvepiped = "https://pipedapi.palveluntarjoaja.eu"

    const projectinpiped = "https://pipedapi.in.projectsegfau.lt"

    const rf4opiped = "https://pipedapi.r4fo.com"

    const kavinrockspiped = "https://pipedapi.kavin.rocks"

    if (value === "piped.yt"){

        selectedurl = pipedyt

    }

    else if (value === "garudalinux.org"){

        selectedurl = garudalinuxpiped

    }
    else if (value === "osphost.fi"){

        selectedurl = osphostpiped

    }
    else if (value === "pluto.lat"){

        selectedurl = plutopiped

    }
    else if (value === "mha.fi"){

        selectedurl = mhapiped

    }
    else if (value === "libre.kavin.rocks"){

        selectedurl = kavinrockspipedlibre

    }

    else if (value === "game.yt"){

        selectedurl = gameytpiped

    }

    else if (value === "lunar.icu"){

        selectedurl = lunaricupiped

    }

    else if (value == "palveluntarjoaja.eu"){

        selectedurl = palvepiped

    }

    else if (value === "projectsegfau.lt-in"){

        selectedurl = projectinpiped

    }

    else if (value === "r4fo.com"){

        selectedurl = rf4opiped

    }

    else if (value === "kavin.rocks"){

        selectedurl = kavinrockspiped    

    }

    const headers = {

        'Content-Type': 'application/json',

        'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",

    }

    const fetchsongdata = async () => {

        try  {

            const newsearch = newsearch ? search.replace(/ /g , '+') : search; 

            console.log(search);

            const url = /* "https://pipedapi-libre.kavin.rocks"  */selectedurl + `/search?q=${newsearch}&filter=all`;

            // console.log(url);

            const response = await fetch(url,{method: 'GET', headers: headers});

            const responseData = await response.json();

            // console.log(responseData);

            const songurl = "https://piped.video" + responseData.items[0].url;

            // const artwork = responseData.items[0].thumbnail;

            setSongurl(songurl);

            const videoid = PipedVideoId(songurl);

            // console.log(videoid);

            const streams =/*  "https://pipedapi-libre.kavin.rocks"  */ selectedurl + `/streams/${videoid}`;

            const responsestream = await fetch(streams,{method: 'GET' , headers: headers});
            
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

            setArtistName(artist_name);

            setArtwork(artwork);

            setSongName(song_name);

            setStream(stream); 

        } catch (err){

            console.log(err);

        } finally {

            setIsLoading(false);
           
        }
        

    };

   return (

        <View style={{flex:1, backgroundColor: dark.dark.themeColor}}>

           <View>

                <Searchbar 
                           
                    placeholder="Search Music"
                    onChangeText={onChangeSearch}
                    value={search}
                    onIconPress={() => {
                                                    
                        console.log("Button Pressed");

                        fetchsongdata();

                    }}
                        

                />

                <Card style={styles.container}>

                    <View style={styles.cardContent}>
                        
                        <Card.Cover source={{ uri: artwork }}  style={{ width: 50 , height: 50 }}/>

                            <Card.Title title={song_name} subtitle={artist_name} style={styles.textContainer}/>

                        <Card.Actions>
                            
                            <IconButton icon='play' mode="contained" onPress={() => {

                                navigation.navigate('StreamAudioPlayer', {song_name,artist_name,artwork,stream,isLoading})

                            }}/>

                        </Card.Actions>
                    </View>
                </Card>

           </View> 

        </View>

   ) 

}

const styles = StyleSheet.create({

   container: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenwidth - 20,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: screenwidth - 30,
    },
    textContainer: {
        marginLeft: 10,
        flexShrink: 1,  // Allow the text to shrink if it doesn't fit
    }, 


})

export default Search;
