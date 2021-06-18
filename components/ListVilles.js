
import { People } from '@material-ui/icons';
import React , { useState } from 'react';
import { StyleSheet, Text, View , ScrollView, TouchableOpacity ,FlatList} from 'react-native';

export default function Villes() {
   const [ville , setVille] = useState([
    {name : 'Tetouan' , id : '1'},
    {name : 'Tanger'  , id : '2'},
    {name : 'Mdiq'    , id : '3'},
    {name : 'Tetouan' , id : '4'},
    {name : 'Tetouan' , id : '5'},
    {name : 'Tetouan' , id : '6'},
    {name : 'Tetouan' , id : '7'},


   ]);
   const onPressHandler = (name) =>{  
    setVille(() => {
      
     
console.log(name);
return ville ; 
})
   
   } 
    return (
       <View>
        <FlatList 
         horizontal={true}
         data={ville}
         
         renderItem={({ item }) => (
           <Text>
       <TouchableOpacity onPress = {() => onPressHandler(item.name)}>
         <Text style={styles.titre}>{item.name}</Text>
       </TouchableOpacity>
       </Text>
         )}
         keyExtractor={item => item.id}
        />
       </View>



    )
  }
    const styles = StyleSheet.create({
       
       titre : {
         flex:1 , 
         color : 'grey' ,
         textAlign : 'center',
         marginRight:10,
         fontSize : 16
     
       } 
     
     
     
     
     
     
     });