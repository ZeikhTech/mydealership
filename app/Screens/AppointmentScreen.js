import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CompletedList from "../Components/Appointment/CompletedList";
import Screen from "../Components/Common/Screen";
import Text from "./../Components/Common/Text";
import routes from "../Navigation/routes";
import colors from "../Config/colors";

function AppointmentScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Appointments</Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.ADD_APPOINTMENT)}
            >
              <MaterialCommunityIcons
                name="plus-circle"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scheduleAppointment}>
          <Text style={{ color: colors.medium, fontSize: 14 }}>
            You don't have any Scheduled Appointment
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.completedContainer}>
          <Text style={styles.title}>Completed</Text>
          <CompletedList date="7 July 2020" time="11AM - 1PM" />
          <CompletedList date="14 September 2020" time="3PM - 5PM" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  header: {
    marginTop: 20,
    margin: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    left: 320,
    bottom: 28
  },
  scheduleAppointment: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  separator: {
    height: 1,
    width: "85%",
    top: 70,
    backgroundColor: colors.placeholder,
    margin: 20,
    alignSelf: "center"
  },
  completedContainer: {
    marginTop: 65,
    marginLeft: 20
  }
});

export default AppointmentScreen;
