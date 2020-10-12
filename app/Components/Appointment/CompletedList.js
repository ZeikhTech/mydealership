import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../Config/colors";

function CompletedList({ date, time }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        {date && <Text style={styles.date}>{date}</Text>}
        {time && <Text style={styles.time}>{time}</Text>}
      </View>
      <MaterialCommunityIcons
        style={{ marginRight: 5 }}
        name="check-circle"
        size={25}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginRight: 30,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    borderRadius: 3,
    elevation: 4
  },
  detailsContainer: {
    flex: 1
  },
  date: {
    fontWeight: "bold",
    marginLeft: 10,
    top: 9
  },
  time: {
    fontSize: 12,
    marginLeft: 220,
    bottom: 10,
    color: colors.medium
  }
});

export default CompletedList;
