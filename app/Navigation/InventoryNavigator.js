import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../Screens/ListingsScreen";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const InventoryNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen name="ProfileDetails" component={ProfileScreen} />
  </Stack.Navigator>
);

export default InventoryNavigator;
