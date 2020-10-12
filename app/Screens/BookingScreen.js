import React from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../Components/Common/Text";
import Calendar from "../Components/Appointment/Calendar";
import BookingSlot from "../Components/Appointment/BookingSlot";
import Button from "../Components/Common/Button";
import colors from "../Config/colors";
import routes from "../Navigation/routes";

function BookingScreen({ navigation }) {
  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.APPOINTMENTS)}
        >
          <View style={styles.closeIcon}>
            <MaterialCommunityIcons
              color={colors.medium}
              name="close"
              size={25}
            />
          </View>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.title}>
            Hi, Joan! let's Schedule Your Appointment.
          </Text>
        </View>
        <Text style={styles.subTitle}>
          Select a timeframes that we can schedule an appointment
        </Text>
        <Text style={styles.selectTitle}>Select Date</Text>
        <View style={styles.separator} />
        <Calendar />
        <Text style={styles.selectTitle}>Select Time</Text>
        <View style={styles.separator} />
        <View style={styles.timeSlot}>
          <BookingSlot />
        </View>
        <View style={styles.submitButton}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  titleContainer: {
    position: "relative"
  },
  closeIcon: {
    left: 350,
    top: 30
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  subTitle: {
    marginTop: 15,
    margin: 10,
    color: colors.medium
  },
  selectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10
  },
  separator: {
    top: -12,
    right: -135,
    height: 1,
    width: "60%",
    backgroundColor: colors.medium
  },
  submitButton: {
    bottom: 20,
    alignItems: "center"
  }
});

export default BookingScreen;
