import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//================Import every thing needed for font loading==================//
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
//============================================================================//
import MealsNavigator from './navigation/MealNavigator';



//==============this function is for loading fonts and it's async which return promise======================//
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}
//==========================================================================================================//



export default function App() {
  //============================================================================//
  // we have to manage state in order to set loading is finish to true and if not 
  // we use Apploading Component which has startAsync and return promise which we use on 
  // onFinish Property to tell the state that the font is loaded then it will continue
  // to show the rest of the content
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if (!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  };
  //============================================================================//

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({

});
