import { useState , useEffect }from "react";


export const VidFetcher = (search) => {

    const [songurl , setSongurl] = useState("8.8");

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

            const url = `https://piped-api.garudalinux.org/search?q=${newsearch}&filter=all`;

            const response = await fetch(url);

            const responseData = await response.json();

            console.log(responseData);

            const songurl = "https://piped.video" + responseData.items[0].url;

            setSongurl(songurl);

       } catch (err){

            console.log(err)

       }
        

    };

    useEffect(() => {

        fetchsongdata();

    }, [search]);

    return { songurl, fetchsongdata };

}

    
