import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../../Config/colors";

function AppCard({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.surfaceContainer}>
      <View style={styles.surface}>
        <View style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.Image} source={imageUrl} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>2020 Toyota RAV4 LE SUV</Text>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            style={styles.dots}
            onPress={() => console.log("more")}
          />

          <View style={styles.sectionContainer1}>
            <MaterialCommunityIcons
              style={styles.itemIcon}
              name="engine-outline"
              size={20}
            />
            <Text style={styles.text}>2.5L l- 4cyl</Text>
            <MaterialCommunityIcons
              style={styles.fuelIcon}
              name="gas-station-outline"
              size={20}
            />
            <Text style={styles.text}>26/35</Text>
          </View>
          <View style={styles.sectionContainer2}>
            <MaterialCommunityIcons
              style={styles.itemIcon}
              name="dlna"
              size={20}
            />
            <Text style={styles.text}>Automatic</Text>
            <MaterialCommunityIcons
              style={styles.colorIcon}
              name="format-color-fill"
              size={20}
            />
            <View style={{ width: 110, marginBottom: 10 }}>
              <Text style={styles.text2}>White Black fabric</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  surfaceContainer: {
    width: "100%"
  },
  surface: {
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row"
  },
  infoContainer: {
    backgroundColor: colors.white,
    width: 310,
    left: -55,
    height: 120,
    borderRadius: 5,
    elevation: 4
  },
  imageContainer: {
    marginLeft: 5,
    elevation: 6
  },
  Image: {
    margin: 10,
    marginHorizontal: 0,
    height: 100,
    width: 160,
    zIndex: 5
  },
  sectionContainer1: {
    marginLeft: 40,
    top: -25
  },
  sectionContainer2: {
    marginLeft: 40,
    right: -95,
    top: -98
  },
  itemIcon: {
    color: colors.medium,
    marginLeft: 20
  },
  fuelIcon: {
    color: colors.medium,
    left: -230
  },
  colorIcon: {
    color: colors.medium,
    left: 20
  },
  text: {
    fontSize: 12,
    top: -18,
    right: -35,
    color: colors.medium
  },
  text2: {
    fontSize: 12,
    top: -20,
    right: -35,
    color: colors.medium
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    right: -50,
    marginTop: 10,
    marginBottom: 15
  },
  dots: {
    color: colors.primary,
    left: 250,
    bottom: 35
  }
});

export default AppCard;
