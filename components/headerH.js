import React from 'react';
import { StyleSheet, Text, View , TextInput , ScrollView ,Button , TouchableOpacity} from 'react-native';
//import TextInput from 'react-native-textinput-with-icons'
import { MaterialIcons } from '@expo/vector-icons'; 
import ListIcon from './listIcons'
import { Search } from '@material-ui/icons';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer , useNavigation  } from '@react-navigation/native';

import { Height} from '@material-ui/icons';
import Details from '../pages/details';
import Header from './header';
export default function HeaderHome( { details } ){
  const navigation = useNavigation();
    const changeHandler = () => {
        console.log('Hi');
 }
    return(
   <View style={styles.header}>
       {/* <Text style={styles.title}>Discover</Text>
          <View style={styles.viewParent}>
           
            <MaterialIcons name='search' size = {25} style={styles.icon1} />
         
           
            <TextInput

           style={styles.input}
            onChangeText={changeHandler}
            placeholder=' search'
            placeholderTextColor='#FFFCFC'
            />
        
          </View> */}
          <Header />

   

         <ListIcon />
        </View>
     )}

const styles = StyleSheet.create({
   
    header:{
       height : 300, 
       paddingTop  :30 ,
       backgroundColor : '#FA8A8A',
       //borderBottomLeftRadius:40,
       //borderBottomRightRadius:40,

    },

    title:{
        marginLeft :20,
        marginTop : 30,
        color : '#fff',
        fontSize : 30,
       },
    viewParent : {
      flexDirection : 'row' ,
      marginRight:15,
      backgroundColor : 'pink',
      borderRadius:40,
      marginLeft :15 ,
      marginTop: 20,
      height:35
    },
    input:{
        flex : 1
    },
    icon1 : {
      marginLeft : 8,
      marginTop:5 , 
      color : '#FFFCFC',

    },
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