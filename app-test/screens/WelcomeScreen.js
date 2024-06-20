import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
// import { PatrickHandSC } from "../assets/fonts/PatrickHandSC-Regular.ttf";
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/comfy-wallpaper.jpg")}
        >
        <View style={styles.banner}>
        <Image source={require("../assets/banner.png")} />
            <Text style={styles.welcome}>welcome!</Text>
        </View>
        <View style={styles.start}>
            <Button color='black' title="start" onPress={() => console.log("Button pressed")}/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        top: '25%',
    },
    welcome: {
        fontSize: 60,
        position: 'absolute',
        top: 10,
        alignSelf: 'center',
        fontFamily: "PatrickHandSC",
    },
    start: {
        backgroundColor: 'white',
        width: 250,
        height: 60,
        top: '65%',
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 30,
        borderRadius: 60,
    }

})
export default WelcomeScreen;