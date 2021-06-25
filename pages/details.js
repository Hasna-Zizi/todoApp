import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListCat from "../components/listCat";
import Villes from "../components/ListVilles";

export default function Details({ route, navigation }) {
  const  title  = route.params?.otherParam ;
  title ? route.params?.otherParam : '';

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 20}}>{title}</Text>
      <View style={styles.content}>
        <Villes />
        <ListCat />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    paddingTop: 30,
    backgroundColor: "#FA8A8A",
  },

  container: {
    flex: 1,
    backgroundColor: "#FA8A8A",
  },

  content: {
    marginTop: 30,
    padding: 20,
    flex: 1,
    backgroundColor: "#fcf2f2",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    height: 200,
  },
});
