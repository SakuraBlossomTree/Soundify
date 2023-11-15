import React from "react";
// import { Button } from "react-native";
import PipedAudioPlayer from "../components/PipedAudioPlayer";
import { VidFetcher } from "../hooks/VidFetcher";

const AudioPlayer = ({ route }) => {
    
    const { search } = route.params;

    const { songurl , fetchsongdata } = VidFetcher(search);    

    return (

        <PipedAudioPlayer audioUrl={songurl}/> 

        // <Button 
        //
        //     title="Data Send"
        //     onPress={fetchsongdata}
        //
        // />

    )

};

export default AudioPlayer;
