import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation  } from '@react-navigation/native';


export default function Header( { details , titre } ){
  const navigation = useNavigation();
    return(
   <View>
       <Text style={styles.title}>{titre}</Text>
          <View style={styles.viewParent}>
           
            <MaterialIcons name='search' size = {25} style={styles.icon1} />
         
           
            <TextInput

           style={styles.input}
            placeholder=' search'
            placeholderTextColor='#FFFCFC'
            />
        
          </View>

   

        
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