import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  const handlePress = () => console.log("Text pressed")
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name = "Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name = "Menu"
          component={MenuScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <Text onPress={handlePress}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <Image source={{
    //       width: 200,
    //       height: 300,
    //       uri: "https://picsum.photos/200/300"
    //     }}/>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
