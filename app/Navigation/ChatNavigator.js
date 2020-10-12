import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChatScreen from "../Screens/ChatScreen";

const Stack = createStackNavigator();

const AppointmentNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Chats" component={ChatScreen} />
  </Stack.Navigator>
);

export default AppointmentNavigator;
