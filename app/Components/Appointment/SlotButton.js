import React, { useState, useRef } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

import * as Animatable from "react-native-animatable";
import colors from "../../Config/colors";

function SlotButton({ onPress, text }) {
  const [status, setStatus] = useState(false);

  const handlePress = () => {
    onPress(!status);
    setStatus(!status);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animatable.View
        style={{
          height: 35,
          width: 110,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: status ? colors.dark : colors.white,
          borderRadius: 20
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: status ? colors.primary : colors.dark
          }}
        >
          {text}
        </Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}

export default SlotButton;
