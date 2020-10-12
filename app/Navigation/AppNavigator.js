import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../Config/colors";
import InventoryNavigator from "./InventoryNavigator";
import AppointmentNavigator from "./AppointmentNavigator";
import ChatNavigator from "./ChatNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inventory"
        component={InventoryNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-multiple"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 1,
                fontWeight: "bold",
                color: focused ? colors.primary : colors.medium
              }}
            >
              Inventory
            </Text>
          )
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 1,
                fontWeight: "bold",
                color: focused ? colors.primary : colors.medium
              }}
            >
              Appointment
            </Text>
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              color={color}
              size={size}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 1,
                fontWeight: "bold",
                color: focused ? colors.primary : colors.medium
              }}
            >
              Chat
            </Text>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
