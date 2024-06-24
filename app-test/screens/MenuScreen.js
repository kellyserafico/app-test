import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

function MenuScreen(props) {
    const [fontsLoaded] = useFonts({
        'PatrickHandSC-Regular': require('../assets/fonts/PatrickHandSC-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const [checkedTasks, setCheckedTasks] = useState({});
    const [tasks, setTasks] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [editMode, toggleEditMode] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [editedText, setEditedText] = useState('');

    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (editMode) {

            const rotateAnimation = Animated.loop(
                Animated.sequence([
                    Animated.timing(rotateAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
                    Animated.timing(rotateAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
                    Animated.timing(rotateAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
                    Animated.timing(rotateAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
                    Animated.timing(rotateAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
                ])
            );

            Animated.parallel([rotateAnimation]).start();
        } else {
            rotateAnim.stopAnimation();
        }
    }, [editMode]);

    const rotate = rotateAnim.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-5deg', '5deg']
    });

    const toggleCheck = (task) => {
        setCheckedTasks((prev) => ({
            ...prev,
            [task]: !prev[task]
        }));
    };

    const createTask = () => {
        setShowInput(!showInput);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
            setShowInput(false);
        }
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter((t) => t !== task));
    }

    const startEditingTask = (task) => {
        setEditingTask(task);
        setEditedText(task);
    }

    const saveEditedTask = (oldTask) => {
        if (editedText.trim() !== '') {
            setTasks(tasks.map(task => task === oldTask ? editedText.trim() : task));
            setEditingTask(null);
            setEditedText('');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>To Do List</Text>
            <Animated.View style={[styles.editContainer, { transform: [{ rotate }] }]}>
                <TouchableOpacity onPress={() => toggleEditMode(!editMode)}>
                    <Image source={require("../assets/pencil-icon.png")}></Image>
                </TouchableOpacity>
            </Animated.View>

            <View style={styles.contentContainer}>
                {tasks.length === 0 ? (
                    <Text style={styles.noTasksText}>no current tasks...</Text>
                ) : (
                    tasks.map((task, index) => {
                        const isChecked = checkedTasks[task] || false;
                        return (
                            <View key={index} style={styles.task}>
                                <TouchableOpacity
                                    style={[styles.checkbox, isChecked && styles.checked]}
                                    onPress={() => toggleCheck(task)}
                                />
                                {editMode && editingTask === task ? (
                                    <TextInput
                                        style={styles.input}
                                        value={editedText}
                                        onChangeText={setEditedText}
                                        onBlur={() => saveEditedTask(task)}
                                        autoFocus
                                    />
                                ) : (
                                    <TouchableOpacity onPress={() => editMode ? startEditingTask(task) : toggleCheck(task)}>
                                        <Text style={isChecked ? styles.strikethrough : styles.normal}>
                                            {task}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                {editMode && (
                                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(task)}>
                                        <Image source={require("../assets/delete-icon.png")}></Image>
                                    </TouchableOpacity>
                                )}
                            </View>
                        );
                    })
                )}
                {showInput && (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="enter task"
                            value={newTask}
                            onChangeText={setNewTask}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addTask}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.createButtonContainer}>
                <TouchableOpacity style={styles.createButton} onPress={createTask}>
                    <Text style={styles.createButtonText}>create</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'PatrickHandSC-Regular',
        marginVertical: 20,
    },
    contentContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    createButtonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    createButton: {
        backgroundColor: "#424758",
        width: 200,
        borderRadius: 60,
        padding: 3,
        alignItems: 'center',
    },
    createButtonText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'PatrickHandSC-Regular'
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
        fontSize: 30,
        color: 'black',
        fontFamily: 'PatrickHandSC-Regular'
    },
    strikethrough: {
        fontSize: 30,
        textDecorationLine: 'line-through',
        color: 'gray',
        fontFamily: 'PatrickHandSC-Regular'
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    noTasksText: {
        fontSize: 24,
        color: 'gray',
        fontFamily: 'PatrickHandSC-Regular',
        alignSelf: 'center',
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        width: '70%',
        borderRadius: 5,
        fontSize: 18,
    },
    addButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginLeft: 10,
    },
    addButtonText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'PatrickHandSC-Regular'
    },
    noTasksText: {
        fontSize: 30,
        color: 'gray',
        fontFamily: 'PatrickHandSC-Regular',
        alignSelf: 'center',
        marginTop: 250,
    },
    editContainer: {
        position: 'absolute',
        right: 20,
        top: 73,
        width: 28,
        height: 28,
    },
    deleteButton: {
        position: 'absolute',
        right: 3,
    }
});

export default MenuScreen;
