import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../pages/home";
import Details from "../pages/details";
const Stack = createStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FA8A8A",
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen
          name="details"
          component={Details}
          options={({ route }) => ({ title: route.params.otherParam })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
