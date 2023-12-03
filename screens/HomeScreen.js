import React , { useEffect, useState }from "react";
import { View , StyleSheet ,useColorScheme ,Button} from "react-native";
import { TextInput , Searchbar, Text, Card} from "react-native-paper";
import dark from '../colors'
import Animated ,{ useSharedValue, withDelay, withTiming } from "react-native-reanimated";

const DURATION = 1000;

const DELAY = 800;

const text = ['Welcome' , 'To' , "Soundify"]

const HomeScreen = ({ navigation }) => {

    const theme = useColorScheme();

    const [isShown , setShown] = useState(false);

    const opacity1 = useSharedValue(0);
    const opacity2 = useSharedValue(0);
    const opacity3 = useSharedValue(0);
   
    const show = () => {

        if(isShown === true) {
            
            opacity3.value = withDelay(0 * DELAY , withTiming(0, { duration: DURATION}))
            opacity2.value = withDelay(1 * DELAY , withTiming(0, { duration: DURATION}))
            opacity1.value = withDelay(2 * DELAY , withTiming(0, { duration: DURATION}))
        }
        else{

            
            opacity3.value = withDelay(2 * DELAY , withTiming(1, { duration: DURATION}))
            opacity2.value = withDelay(1 * DELAY , withTiming(1, { duration: DURATION}))
            opacity1.value = withDelay(0 * DELAY , withTiming(1, { duration: DURATION}))

        }

        setShown(false);

    }

    useEffect(() => {
       
        console.log(isShown)

        show();

    }, [])

    const isDarkTheme = theme === 'dark';

    return (

            <View style={[{ flex:1 },isDarkTheme ? { backgroundColor: dark.dark.themeColor} : {backgroundColor: 'white'}]}>


                 <View style={{marginTop:10 , flexDirection: 'row' , justifyContent: 'center'}}>

                    <Animated.Text style={{ ...styles.label , opacity: opacity1 }}>
                      {text[0]}
                    </Animated.Text>
                
                    <Animated.Text style={{ ...styles.label , opacity: opacity2 }}>
                      {text[1]}
                    </Animated.Text>
                    
                    <Animated.Text style={{ ...styles.label , opacity: opacity3 }}>
                      {text[2]}
                    </Animated.Text>
                    
                </View>

            </View>

            )

}

const styles = StyleSheet.create({

    textcolor: {

        color: "#000000",
        borderColor: "#000000",
        borderWidth: 1  

    },

    label: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: 8,
    },



})

export default HomeScreen;
