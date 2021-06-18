import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Footer(){

 return(

 <View style={styles.viewParent}>
   <MaterialIcons name='home' size = {25} style={styles.icon} />
   <Text style={styles.icon}>Home</Text>
</View>
)}
const styles = StyleSheet.create({
  viewParent :{
    backgroundColor : '#fcf7f7',
    flexDirection : 'column',
    textAlign : 'center',
    height : 50,
},
  icon : {
     color:'grey',
     textAlign : 'center'
},



});