import React, { useState , useEffect } from 'react';
import { View , Text , Button, StyleSheet } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { Streamdata } from '../hooks/Streamdata';

const Settings = () => {

    const [open , setOpen] = useState(false);

    const [value , setValue] = useState(null);

    const [items , setItems] = useState([
        
        { label: 'piped.yt', value: 'piped.yt'},
        { label: 'garudalinux.org', value: 'garudalinux.org'},
        { label: 'osphost.fi', value: 'osphost.fi'},
        { label: 'pluto.lat', value: 'pluto.lat'}, 
        { label: 'kavin.rocks.libre(Official)', value: 'libre.kavin.rocks'},
        { label: 'mha.fi', value: 'mha.fi'},
        { label: 'game.yt', value: 'game.yt'},
        { label: 'lunar.icu', value: 'lunar.icu'},
        { label: 'palveluntarjoaja.eu', value: 'palveluntarjoaja.eu'},
        { label: 'projectsegfau.lt-in', value: 'projectsegfau.lt-in'},
        { label: 'r4fo.com', value: 'r4fo.com'},
        { label: 'kavin.rocks', value: 'kavin.rocks'}
    ]);
    
    const { songurl, stream, artist_name, artwork, song_name, isLoading } = Streamdata(value , value);

    const onChangeValue = (value) => {
        
        setValue(value);

    }; 

    return(
        
        <View style={styles.container}>

            <Text style={styles.textcolor}>This is the settings menu</Text>

            <DropDownPicker 
               
                open={open}
                setOpen={setOpen}
                placeholder="Select your Piped Instance"
                items={items}
                value={value}
                setValue={setValue}
                setItems={setItems}
                dropDownDirection="AUTO"
                listMode='MODAL'

            />

            <Button 
                
               title='Button'
               onPress={() => openLink} 

            />

        </View>
        
    )     

}

const styles = StyleSheet.create({

    container: {

        flex: 0.3,

        alignItems: 'center',

        justifyContent: 'space-evenly'

    },

    textcolor: {

        color: "#000000",

        fontSize: 20 

    }

})

export default Settings;
