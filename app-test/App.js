import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
export default function App() {
  const handlePress = () => console.log("Text pressed")

  return (
    <WelcomeScreen/>
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
