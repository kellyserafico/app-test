import React from 'react';
import { SafeAreaView, CheckBox, StyleSheet, View, Image, Text, Button } from 'react-native';

function MenuScreen(props) {
    return (
        <SafeAreaView>
            <Text style={styles.header}>To Do List</Text>
            <View style={styles.contentContainer}>
            </View>
                <View style={styles.createButton}>
                    <Button title="create" color="white"></Button>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // width: '100%',
        // height: '100%'
    },
    createButton: {
        backgroundColor: "#424758",
        width: 200,
        borderRadius: 60,
        position: 'fixed',
        bottom: 0,
    }

})
export default MenuScreen;