import { useState , useEffect }from "react";
import { PipedVideoId } from "./PipedVideoId";

export const Streamdata = (search , value) => {

    const [songurl , setSongurl] = useState("8.8");

    const [stream, setStream] = useState(null);

    const [artist_name , setArtistName] = useState("");

    const [artwork, setArtwork] = useState("");
   
    const [song_name , setSongName] = useState("");

    const [isLoading , setIsLoading] = useState(true);

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

            // console.log(search);

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

            // console.log(stream);

            // console.log(artist_name);

            // console.log(song_name);

            // console.log(artwork);

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

    
