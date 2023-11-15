import React from 'react';
import { View , Text} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Playlist = () => {

    const PlaylistCard = ({ title, description }) => (
            <Card>
                <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
                <Card.Content>
                    <Text style={{ color: "#000000"}}>{title}</Text>
                    <Text style={{ color: "#000000"}}>{description}</Text>
                </Card.Content>
            </Card>
    );
    
    const playlists = [
            
            { title: 'Playlist 1', description: 'Description for Playlist 1' },
            { title: 'Playlist 2', description: 'Description for Playlist 2' },
            // Add more playlists as needed
    ];
    
    return(
        
        

        <View style={{flex: 1}}>

            <Text style={{color: '#000000'}}>This is the Playlist menu</Text>

            {playlists.map((playlist, index) => (
                <PlaylistCard key={index} {...playlist} />
            ))}

        </View>
        
    )     

}

export default Playlist;
