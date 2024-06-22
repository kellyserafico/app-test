import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function MenuScreen(props) {
    const [checkedTasks, setCheckedTasks] = useState({});

    const tasks = ["walk dog", "do homework"];

    const toggleCheck = (task) => {
        setCheckedTasks((prev) => ({
            ...prev,
            [task]: !prev[task]
        }));
    };

    const createTask = () => {

    };
    return (
        <SafeAreaView>
            <Text style={styles.header}>To Do List</Text>
            <View style={styles.contentContainer}>
                {tasks.map((task, index) => {
                    const isChecked = checkedTasks[task] || false;
                    return (
                        <View key={index} style={styles.task}>
                            <TouchableOpacity
                                style={[styles.checkbox, isChecked && styles.checked]}
                                onPress={() => toggleCheck(task)}
                            />
                            <Text style={isChecked ? styles.strikethrough : styles.normal}>
                                {task}
                            </Text>
                        </View>
                    );
                })}
            </View>
            <View style={styles.createButton}>
                <TouchableOpacity>
                    <Text style={styles.createButtonText} onPress={createTask}>Create</Text>
                </TouchableOpacity>
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
        padding: 20,
    },
    createButton: {
        backgroundColor: "#424758",
        width: 200,
        borderRadius: 60,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
    },
    checked: {
        backgroundColor: 'black',
    },
    normal: {
        fontSize: 20,
        color: 'black'
    },
    strikethrough: {
        fontSize: 20,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    }
});

export default MenuScreen;
