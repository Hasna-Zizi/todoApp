import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView , Image} from 'react-native';

export default function ListCat(){
    return(

<ScrollView>

    <View style={{flexDirection : 'row', marginTop : 25}}>

      <View style={{flex : 1}}> 
          <View style={{ height: 190, width: 157,marginBottom: 15, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>

                <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
                    <Image source={require('../assets/restau.jpg')}
                        style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }}
                    />
                    <Text style={{ marginTop: 7 ,  }}>Restaurant</Text>
                </View>
         
                <View style={{ flex: 1, paddingLeft: 10  }}>
                    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
                </View>
         </View>

      <View style={{ height: 190,width: 157, marginBottom: 15, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>
         <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
           <Image source={require('../assets/lorizon.jpg')}
            style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }} />
         <Text style={{ marginTop: 7 ,  }}>lorizon</Text>
        </View>
     <View style={{ flex: 1, paddingLeft: 10  }}>
    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
    </View>

   </View>

         <View style={{ height: 190, width: 157, marginBottom: 15,marginRight :1, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>

                <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
                    <Image source={require('../assets/cafe-shop.jpg')}
                        style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }}
                    />
                    <Text style={{ marginTop: 7 ,  }}>Cafe</Text>
                </View>
         
                <View style={{ flex: 1, paddingLeft: 10  }}>
                    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
                </View>
    </View>

 </View>

<View style={{flex : 1}}> 

<View style={{ height: 190, width: 157, marginBottom: 15, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>

                <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
                    <Image source={require('../assets/total.jpg')}
                        style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }}
                    />
                    <Text style={{ marginTop: 7 ,  }}>Station</Text>
                </View>
         
                <View style={{ flex: 1, paddingLeft: 10  }}>
                    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
                </View>
</View>
     <View style={{ height: 190, width: 157, marginBottom: 15, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>

                <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
                    <Image source={require('../assets/lorizon.jpg')}
                        style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }}
                    />
                    <Text style={{ marginTop: 7 ,  }}>lorizon</Text>
                </View>
         
                <View style={{ flex: 1, paddingLeft: 10  }}>
                    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
                </View>
                
</View>
<View style={{ height: 190, width: 157, marginBottom: 15, borderWidth: 0.5,  borderRadius:10 , backgroundColor : '#fcf2f2' ,borderColor: '#dddddd' }}>

                <View style={{ flex: 2 ,paddingLeft : 8 , paddingTop : 10 , }}>
                    <Image source={require('../assets/lorizon.jpg')}
                        style={{  width: 142, height: 90 , borderRadius:10 , paddingBottom: 10 }}
                    />
                    <Text style={{ marginTop: 7 ,  }}>lorizon</Text>
                </View>
         
                <View style={{ flex: 1, paddingLeft: 10  }}>
                    <Text style={{ marginTop: 7 , color: 'grey'  }}>sousblq bqldhsjihis</Text>
                </View>
                
</View>
</View>
</View>

</ScrollView>
            
    
    )}