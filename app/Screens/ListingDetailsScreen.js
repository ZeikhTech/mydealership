import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Paragraph } from "react-native-paper";

import ImageSwiper from "../Components/Common/ImageSwiper";
import Text from "../Components/Common/Text";
import routes from "../Navigation/routes";
import colors from "../Config/colors";

function ListingDetailsScreen({ navigation }) {
  // const listing = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.image}>
          <ImageSwiper />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>2020 Toyota RAV4 LE SUV</Text>
          <View style={styles.sectionContainer1}>
            <MaterialCommunityIcons
              style={styles.itemIcon}
              name="engine-outline"
              size={27}
            />
            <Text style={styles.iconText}>2.5L l- 4cyl</Text>
            <MaterialCommunityIcons
              style={styles.fuelIcon}
              name="gas-station-outline"
              size={27}
            />
            <Text style={styles.iconText}>26/35</Text>
            <MaterialCommunityIcons
              style={styles.cardIcon}
              name="id-card"
              size={27}
            />
            <Text style={styles.iconText}>Stock # : LW096491 </Text>
            <Text style={styles.iconText}>VIN : 2T3K1RFVXLW096491</Text>
          </View>
          <View style={styles.sectionContainer2}>
            <MaterialCommunityIcons
              style={styles.itemIcon}
              name="dlna"
              size={27}
            />
            <Text style={styles.iconText}>Automatic</Text>
            <MaterialCommunityIcons
              style={styles.colorIcon}
              name="format-color-fill"
              size={27}
            />
            <Text style={styles.iconText}>White Black fabric</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.commentContainer}>
            <Text style={styles.commentTitle}>Comments</Text>
            <Paragraph style={{ color: colors.medium }}>
              LE EDITION**AWD** Blind spot Monitor w/Rear Cross Traffic Alert**
              Android Auto and Apple Car Play** Sirius Xm-Radio**. Malloy Toyota
              in winchester, VA has the Valleys best value New and Pre Owned
              Used Cars, SUV's and Trucks! Call us at 540-678-1791 or email us
              now and lock in the special E-Price on your next vechile! Malloy
              Toyota has been a leading provider of great deals and phenomenal
              prices for customers in the Shenandoah Valley for many years. Our
              Winchester Toyota Dealer specializes in new and pre-owned Toyota
              vechiles, Toyota Finance, Toyota Service, and Toyota parts. Our
              knowledgeable sales staff has been trained and certified by Toyota
              to provide amazing customer service. Since Malloy Toyota has been
              selling and servicing Virginia and West Virginia for such a long
              time, our experience is second to none! Malloy Toyota proudly
              serves Winchester.
            </Paragraph>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  image: {
    height: 330
  },
  detailsContainer: {
    padding: 15
  },
  title: {
    fontSize: 38,
    fontWeight: "bold"
  },
  iconText: {
    fontSize: 13,
    top: -30,
    right: -30,
    color: colors.dark
  },
  sectionContainer1: {
    marginTop: 15,
    marginLeft: 5
  },
  sectionContainer2: {
    height: 100,
    width: 200,
    marginLeft: 40,
    right: -150,
    top: -155
  },
  itemIcon: {
    top: -5,
    color: colors.medium
  },
  fuelIcon: {
    color: colors.medium,
    right: 330,
    bottom: 5
  },
  cardIcon: {
    color: colors.medium
  },
  colorIcon: {
    color: colors.medium,
    bottom: 5
  },
  separator: {
    height: 0.7,
    width: "100%",
    bottom: 110,
    backgroundColor: colors.medium
  },
  commentContainer: {
    bottom: 100
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    right: 10
  }
});

export default ListingDetailsScreen;
