import React , { useState }from "react";
import { View , TextInput , Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {

    const [search, setSearch] = useState('8.8');

    return (

        <View style={{ flex: 1 }}>

            <TextInput 
                style={styles.textcolor}
                placeholder='Search Music'
                value={search}
                onChangeText={setSearch}
                
            />

            <Button 

                onPress={() => {

                    navigation.navigate('AudioPlayer' , { search })

                }}
                title='Search Songs'
                color="#000000"

            />

        </View> 

    )

}

const styles = StyleSheet.create({

    textcolor: {

        color: "#000000"

    }

})

export default HomeScreen;
