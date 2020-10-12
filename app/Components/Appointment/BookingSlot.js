import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import SlotButton from "./SlotButton";

const jsonData = {
  slots: {
    slot1: "7AM - 9AM",
    slot2: "9AM - 11AM",
    slot3: "11AM - 1PM",
    slot4: "1PM - 3PM",
    slot5: "3PM - 5PM",
    slot6: "5PM - 7PM"
  }
};

function BookingSlot(props) {
  const [slot, setSlot] = useState({});

  const bookSlot = (status, key, value) => {
    const bookSlot = status ? value : null;
    setSlot(bookSlot);
  };

  const slots = jsonData.slots;
  const slotArr = Object.keys(slots).map((k) => {
    return (
      <View key={k} style={styles.container}>
        <SlotButton
          text={slots[k]}
          onPress={(status) => bookSlot(status, k, slots[k])}
        />
      </View>
    );
  });

  return <View style={styles.timeSlot}>{slotArr}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    padding: 5
  },
  timeSlot: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 400
  }
});

export default BookingSlot;
