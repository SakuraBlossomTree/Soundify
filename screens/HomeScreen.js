import React , { useState }from "react";
import { View , TextInput , Button, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState('8.8');

    const theme = useTheme();

    return (

            <View style={{ flex: 1 , alignItems: 'center' }}>

                <TextInput 
                    style={styles.textcolor}
                    placeholder='Search Music'
                    value={search}
                    onChangeText={setSearch}
                
                />

                <Button 

                    onPress={() => {

                        navigation.navigate('AudioPlayer' , { search })

                        navigation.navigate('StreamAudioPlayer' , { search })

                    }}
                    title='Search Songs'
                    color="#000000"

                />

            </View> 


            )

}

const styles = StyleSheet.create({

    textcolor: {

        marginBottom: 10,
        color: "#000000",
        borderColor: "#000000",
        borderWidth: 1  

    }

})

export default HomeScreen;
