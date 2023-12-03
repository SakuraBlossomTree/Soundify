import React, {useState} from 'react';
// import { Picker } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider , TextInput , Card} from 'react-native-paper';

const Playlist = () => {

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("");
    const [playlists , setPlaylists] = useState([]);
    const [selectedPlaylist , setSelectedPlaylist] = useState(null);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'black', padding:  20};

    const createPlaylist = (playlistName) => {

        setPlaylists((prevPlaylists) => [...prevPlaylists , { name: playlistName }])
        hideModal();
    
    }

    return (
        
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Text>New Playlist. Click outside this area to dismiss.</Text>
                    <TextInput 
                        label={"Playlist Name"}
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Button style={{marginTop: 30}} onPress={()=>{createPlaylist(text)}}>
                        Create Playlist
                    </Button>
                </Modal>
                
            </Portal>
            <Text>This is a test</Text>


            {playlists.map((playlist) => (

                <Card key={playlist.name}>
                    <Card.Title title={playlist.name} />
                </Card>

            ))}


            <Button style={{marginTop: 30}} onPress={showModal}>
                Show
            </Button>

        </PaperProvider>
        
    )

}

export default Playlist;
