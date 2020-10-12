import React from "react";
import { View, StyleSheet, TxtInput } from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../Config/styles";
import colors from "../../Config/colors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[
          defaultStyles.text,
          { backgroundColor: defaultStyles.colors.light }
        ]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    // borderRadius: 10,
    // flexDirection: "row",
    // alignItems: "stretch",
    marginBottom: 5,
    alignItems: "stretch"
    // width: 100
    // paddingHorizontal: 0,
    // borderWidth: 1,
    // padding: 12,
    // marginVertical: 10,
    // height: 50,
    // elevation: 2.5
  },
  icon: {
    marginRight: 10
  }
});

export default AppTextInput;
