import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
};
