
import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListImage from './components/listImages';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';
import Home from './pages/home';
import Details from './pages/details';
const Stack =createStackNavigator();
export default function App() {
  return (
    
     <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen 
      name="home" 
      component={Home}/>
    <Stack.Screen 
      name="details" 
       component={Details}
       options={({ route }) => ({ title: route.params.name })}/>
     </Stack.Navigator>
    </NavigationContainer>
  
 
 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA8A8A',
    },
  content: {
     padding : 20,
     flex: 1,
     backgroundColor: '#fcf2f2',
     borderTopEndRadius : 40,
     borderTopLeftRadius : 40,
     height:200
  }
//Unsure Programmer
//Programming with Mash 17

});
