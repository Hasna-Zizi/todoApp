
import React , { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';
import ListCat from '../components/listCat';
import Villes from '../components/ListVilles';

export default function Details({route , navigation} ){ 
    const { otherParam } = route.params;
   
        return (
            <View style={styles.container}>
              <View >
               <Header titre ={JSON.stringify(otherParam)}/>
             </View>
              <View style={styles.content}>

            {/* <Text>Hi : {JSON.stringify(otherParam)}</Text> */}
            <Villes />

            <ListCat />
           
            </View >

            <Footer />
            </View>
            
                )
      
      

    }

    const styles = StyleSheet.create({
   
        header:{
           height : 200, 
           paddingTop  :30 ,
           backgroundColor : '#FA8A8A',
           //borderBottomLeftRadius:40,
           //borderBottomRightRadius:40,
    
        },
    
        container: {
            flex: 1,
            backgroundColor: '#FA8A8A',
            },
            
            content: {
                marginTop : 30,
               padding : 20,
               flex: 1,
               backgroundColor: '#fcf2f2',
               borderTopEndRadius : 40,
               borderTopLeftRadius : 40,
               height:200
            }
      
    
    });