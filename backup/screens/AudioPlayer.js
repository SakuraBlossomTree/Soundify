import React from "react";
import PipedAudioPlayer from "../components/PipedAudioPlayer";

const AudioPlayer = ({ route }) => {

    const { search } = route.params;

    const songUrl = "https://piped.video/results?search_query=" + search

    return (

       <PipedAudioPlayer audioUrl={songUrl}/> 

    )

};

export default AudioPlayer;
