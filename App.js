import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import Details from './screens/Details';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import { StatusBar } from 'expo-status-bar';




const App = () => {
  const [fontLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/InterDisplay-Light.ttf'),
    InterMedium: require('./assets/fonts/InterDisplay-Medium.ttf'),
    InterRegular: require('./assets/fonts/InterDisplay-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/InterDisplay-SemiBold.ttf'),
  });

//  back handler
  // useEffect(() => {
  //   const exitHandler = () => {
  //     Alert.alert("Exit app", "Are you sure you want to exit?", [
  //       { text: 'Cancel', onPress: () => null, style: 'cancel' },
  //       { text: 'OK', onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', exitHandler);
  //   return () => backHandler.remove();
  // }, []);

  if (!fontLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <>
   <StatusBar style='light' animated={true}/>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
export default App;

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  buttonOpen: {
    backgroundColor: '#f194ff'
  },

  buttonClose: {
    backgroundColor: '#2196f3',
    marginTop: 20
  },

  title: {
    color: 'white',
    fontWeight: 'bold'
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
