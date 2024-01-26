import React, { createContext,useState , useEffect ,useContext } from 'react';
import { View , StyleSheet , useColorScheme, Button} from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import light from '../colors';
import dark from '../colors';
import { RadioButton, Text } from 'react-native-paper';
import { ThemeContext } from '../App';
import { DefaultTheme , DarkTheme} from '@react-navigation/native';

// export let checkedValue = 'light';

const Settings = ({ navigation }) => {
    
    const [value, setValue] = useState("saavn.me");    

    const [open , setOpen] = useState(false);

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
        { label: 'kavin.rocks', value: 'kavin.rocks'},
        { label: 'ggtyler.dev', value: 'ggtyler.dev'},
        { label: 'seitan-ayoub.lol', value: 'seitan-ayoub.lol'},
        { label: 'adminforge.de', value: 'adminforge.de'},
        { label: 'smnz.de', value: 'smnz.de'},
        { label: 'projectsegfau.lt', value: 'projectsegfau.lt'},
        { label: 'privacydev.net', value: 'privacydev.net'},
        { label: 'JioSaavan', value: 'saavn.me'},
    ]);
  
    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

    const onChangeValue = (value) => {
        
        setValue(value);

    }; 

    const onPressSetInstance = () =>{

        navigation.navigate('Search' , {value});

        navigation.navigate('Playlist', {value})

    }

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

                    <Button title="Set Instance" onPress={onPressSetInstance} />
                    
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
