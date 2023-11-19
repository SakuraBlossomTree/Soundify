import React, { useState , useEffect ,useContext } from 'react';
import { View , StyleSheet , useColorScheme} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import { Streamdata } from '../hooks/Streamdata';
import light from '../colors';
import dark from '../colors';
import { RadioButton, Text } from 'react-native-paper';
import { ThemeContext } from '../App';
import { DefaultTheme , DarkTheme} from '@react-navigation/native';

// export let checkedValue = 'light';

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

    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

    const onChangeValue = (value) => {
        
        setValue(value);

    }; 

    return(
       
        <View style={[{flex:1},isDarkTheme ? { backgroundColor: dark.dark.themeColor} : {backgroundColor: 'white'}]}>
            <View style={styles.container}>
                
                <Text style={[styles.textcolor,isDarkTheme ? {color: dark.dark.white} : {color: dark.dark.themeColor}]}>This is the settings menu</Text>

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
                    theme={isDarkTheme ? 'DARK' : "LIGHT"}

                />
                
            </View>
            
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

        fontSize: 20 

    }

})

export default Settings;

