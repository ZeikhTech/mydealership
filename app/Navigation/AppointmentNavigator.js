import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppointmentScreen from "../Screens/AppointmentScreen";
import BookingScreen from "../Screens/BookingScreen";

const Stack = createStackNavigator();

const AppointmentNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Appointments" component={AppointmentScreen} />
    <Stack.Screen name="AddAppointment" component={BookingScreen} />
  </Stack.Navigator>
);

export default AppointmentNavigator;
