import React from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderHome({ details }) {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 'bd7acbea',
      title: 'Food',
      iconName: 'restaurant',
      color: "#FA8A8A",
      size : 30
    },
    {
      id: 'bd7azea',
      title: 'Hotel',
      iconName: 'hotel',
      color: "#FA8A8A",
      size : 30
    },
    {
      id: 'bd7acbefdfsa',
      title: 'Hospital',
      iconName: 'local-hospital',
      color: "#FA8A8A",
      size : 30
    },

  ];

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.wrap}>
    <View style={styles.itemContainer}>
      <MaterialIcons
            name={item.iconName}
            size={item.size}
            color={item.color}
            style={styles.iconItem}
            onPress={() =>
              navigation.navigate("details", {
                otherParam: item.title,
              })
            }
          />
    </View>
    <Text style={styles.titleSection}> {item.title} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.header}>
      
      <FlatList
      horizontal={true}
      data={DATA}
      renderItem={Item}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer:{
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 60,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemTitle:{
    fontSize: 15,
    color: 'black'
  },
  iconItem:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  titleSection:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
