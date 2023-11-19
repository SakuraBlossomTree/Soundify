import React , { useState }from "react";
import { View , StyleSheet ,useColorScheme } from "react-native";
import { Button , TextInput , Searchbar} from "react-native-paper";
import dark from '../colors'

const HomeScreen = ({ navigation }) => {

    const theme = useColorScheme();

    const isDarkTheme = theme === 'dark';

    const [search, setSearch] = useState('');

    const onChangeSearch = search => setSearch(search);

    return (

            <View style={[{ flex:1},isDarkTheme ? { backgroundColor: dark.dark.themeColor} : {backgroundColor: 'white'}]}>


                 <View style={{marginTop:10}}>

                    <Searchbar 
                       
                        placeholder="Search Music"
                        onChangeText={onChangeSearch}
                        value={search}
                        onIconPress={() => {

                            navigation.navigate('AudioPlayer' , {search})

                            navigation.navigate('StreamAudioPlayer', {search})

                        }}
                            

                    />
                    

                </View> 


            </View>

           

            )

}

const styles = StyleSheet.create({

    textcolor: {

        color: "#000000",
        borderColor: "#000000",
        borderWidth: 1  

    }

})

export default HomeScreen;
