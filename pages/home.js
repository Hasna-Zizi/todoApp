import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderHome from '../components/headerH' ;
import ListImage from '../components/listImages';

export default function Home() {
  return (
    
  <View style={styles.container}>
     <HeaderHome />
       <View style={styles.content}>
          <View style={{flexDirection : 'row'}}>
            <Text style={{flex : 1 , fontSize : 20 , color : 'black'}}>Popular places</Text>
            <Text style={{color :'#FA8A8A' , fontSize :15}}>see all</Text>
          </View>
          <ListImage />
       </View>
       <View>
   </View>
  </View>
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
