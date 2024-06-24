import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import {useFonts} from 'expo-font';
function WelcomeScreen({navigation}) {
    const [fontsLoaded] = useFonts({
        'PatrickHandSC-Regular': require('../assets/fonts/PatrickHandSC-Regular.ttf'),
      });

    //   if (!fontsLoaded) {
    //     return <AppLoading />;
    //   }
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/comfy-wallpaper.jpg")}
        >
        <View style={styles.banner}>
        <Image source={require("../assets/banner.png")} />
            <Text style={styles.welcome}>welcome!</Text>
        </View>
        <TouchableOpacity style={styles.start} onPress={() => navigation.navigate("Menu")}>
            <Text style={styles.startText}>start</Text>
        </TouchableOpacity>
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
        alignSelf: 'center',
        fontFamily: 'PatrickHandSC-Regular'
    },
    start: {
        backgroundColor: 'white',
        width: 250,
        height: 60,
        top: '50%',
        borderRadius: 60,
    },
    startText: {
        fontSize: 30,
        fontFamily: 'PatrickHandSC-Regular',
        alignSelf: 'center',
        top: 5
    }

})
export default WelcomeScreen;