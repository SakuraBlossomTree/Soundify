import { useState , useEffect }from "react";
import { PipedVideoId } from "./PipedVideoId";

export const Streamdata = (search) => {

    const [songurl , setSongurl] = useState("8.8");

    const [stream, setStream] = useState(null);

    const [artist_name , setArtistName] = useState("");

    const [artwork, setArtwork] = useState("");
   
    const [song_name , setSongName] = useState("");

    const [isLoading , setIsLoading] = useState(true);

    // const songUrl = "https://piped.video/results?search_query=" + search
    
    // const url = `https://pipedapi.kavin.rocks/search?q=${search}&ffilter-all`;

    const fetchsongdata = async () => {

        try  {

            const newsearch = newsearch ? search.replace(/ /g , '+') : search; 

            console.log(search);

            // const url = `https://pipedapi.in.projectsegfau.lt/search?q=${newsearch}&filter=all`;

            // const url = `https://pipedapi-libre.kavin.rocks/search?q=${newsearch}&filter=all`;

            // const url = `https://pipedapi.kavin.rocks/search?q=${newsearch}&filter=all`;

            // const url = `https://api-piped.mha.fi/search?q=${newsearch}&filter=all`;

            // const url = `https://api.watch.pluto.lat/search?q=${newsearch}&filter=all`;

            // const url = `https://pipedapi.osphost.fi/search?q=${newsearch}&filter=all`; 

            // const url = `https://piped-api.garudalinux.org/search?q=${newsearch}&filter=all`;

            const url = `https://api.piped.yt/search?q=${newsearch}&filter=all`;

            const response = await fetch(url);

            const responseData = await response.json();

            // console.log(responseData);

            const songurl = "https://piped.video" + responseData.items[0].url;

            // const artwork = responseData.items[0].thumbnail;

            setSongurl(songurl);

            const videoid = PipedVideoId(songurl);

            console.log(videoid);

            const streams = `https://api.piped.yt/streams/${videoid}`;

            const responsestream = await fetch(streams);
            
            const responsestreamdata = await responsestream.json();

            // console.log(responsestreamdata);

            const stream = responsestreamdata.audioStreams[0].url;
            
            const artist_name = responsestreamdata.uploader;

            const song_name = search

            const artwork = responsestreamdata.thumbnailUrl;

            console.log(stream);

            console.log(artist_name);

            console.log(song_name);

            console.log(artwork);

            setArtistName(artist_name);

            setArtwork(artwork);

            setSongName(song_name);

            setStream(stream); 

            return { songurl , stream , artist_name , artwork , song_name};

        } catch (err){

            console.log(err);

            return { songurl , stream  , artist_name , artwork , song_name};

        } finally {

            setIsLoading(false);
            
            return { songurl , stream  , artist_name , artwork , song_name , isLoading};

        }
        

    };

    useEffect(() => {

        fetchsongdata();

    }, [search]);

    return { songurl , stream  , artist_name , artwork , song_name , isLoading};

}

    
