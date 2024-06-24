import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
import { useFonts } from 'expo-font';

function WelcomeScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'PatrickHandSC-Regular': require('../assets/fonts/PatrickHandSC-Regular.ttf'),
    });

    const buttonBobbing = useRef(new Animated.Value(0)).current;

    const bobbingAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(buttonBobbing, {
                    toValue: 7,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(buttonBobbing, {
                    toValue: -7,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    useEffect(() => {
        bobbingAnimation();
        return () => {
            buttonBobbing.stopAnimation();
        };
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}
                    resizeMode="contain"
                />
                <Animated.View style={[styles.start, { transform: [{ translateY: buttonBobbing }] }]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
                        <Text style={styles.startText}>start</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 50,
    },
    start: {
        backgroundColor: '#424758',
        width: 250,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startText: {
        fontSize: 30,
        fontFamily: 'PatrickHandSC-Regular',
        color: 'white',
    }
});

export default WelcomeScreen;
