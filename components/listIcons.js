import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView , TouchableOpacity, Touchable, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';

import { Height} from '@material-ui/icons';
import Details from '../pages/details';
//const Stack =createStackNavigator();

export default function ListIcon({ details }){
  const navigation = useNavigation(); 
  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen 
  //     name="dd" 
  //     component={Details}/>
    
  //   </Stack.Navigator>
  //   </NavigationContainer>
  //  const pressHandler = () =>{
  //    navigation.navigate('dd');
  //  }
    return(
      <ScrollView horizontal={true}>
    <View style={{ flexDirection : 'column' , paddingTop : 20}}>
     
      <View style={{ flexDirection : 'row'}}>
       
              <MaterialIcons name='restaurant' size = {28} style={styles.icon} onPress={() => navigation.navigate('details' , {
            otherParam: 'Restaurant'})} />
              <MaterialIcons name='hotel' size = {28}  style={styles.icon} onPress={() => navigation.navigate('details' , {
            otherParam: 'hotel'})}/>
              <MaterialIcons name='local-hospital' size = {28} style={styles.icon} onPress={(val) => pressHandler('hospital')}/>
              <MaterialIcons name='local-cafe' size = {28} style={styles.icon} onPress={(val) => pressHandler('cafe')}/>
              <MaterialIcons name='local-library' size = {28} style={styles.icon} onPress={(val) => pressHandler('library')} />
              <MaterialIcons name='local-cafe' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <MaterialIcons name='local-library' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <MaterialIcons name='local-cafe' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <MaterialIcons name='local-library' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <MaterialIcons name='local-cafe' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <MaterialIcons name='local-library' size = {28} style={styles.icon} onPress={(val) => pressHandler('restaurant')}/>
              <Button title='go' onPress={() => navigation.navigate('details')}></Button>
   
   
             
      </View>
     
       
      <View style={{ flexDirection : 'row'}}>
   
              <Text style={styles.titre}>Food</Text>
              <Text style={styles.titre}>Hotel</Text>
              <Text style={styles.titre}>Hopital</Text>
              <Text style={styles.titre}>Cafe</Text>
              <Text style={styles.titre}>Biblio</Text>
              <Text style={styles.titre}>Cafe</Text>
              <Text style={styles.titre}>Biblio</Text>
              <Text style={styles.titre}>Cafe</Text>
              <Text style={styles.titre}>Biblio</Text>
              <Text style={styles.titre}>Cafe</Text>
              <Text style={styles.titre}>Biblio</Text>
              
      </View>
 
   </View>
   </ScrollView>
   
);
}
const styles = StyleSheet.create({
   icon : {
       paddingTop : 15,
   flex:1 , 
    color : '#FA8A8A' ,
    textAlign : 'center',
     marginLeft:10,
     backgroundColor : 'white',
     borderRadius : 40,
     width : 55,
     height :55,
     

   },
  titre : {
    flex:1 , 
    color : 'white' ,
    textAlign : 'center',
    marginLeft:10,
    width : 50,

  } 






});