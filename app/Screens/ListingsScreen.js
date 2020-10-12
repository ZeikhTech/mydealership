import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { Searchbar } from "react-native-paper";

import Screen from "../Components/Common/Screen";
import Card from "../Components/Common/Card";
import Text from "../Components/Common/Text";
import colors from "../Config/colors";
import routes from "../Navigation/routes";

function ListingsScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>Michael Bailey</Text>
          </View>
          <View style={styles.headerImage}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(routes.PROFILE_DETAILS)}
            >
              <View style={styles.outerCircle}>
                <Image
                  style={styles.image}
                  source={require("../assets/profile.jpg")}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Searchbar
            style={{ elevation: 9 }}
            placeholder="Search"
            placeholderTextColor={colors.placeholder}
          />
        </View>
        <ScrollView>
          <View style={styles.list}>
            <Card
              imageUrl={require("../assets/unnamed.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
            <Card
              imageUrl={require("../assets/car6.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
            <Card
              imageUrl={require("../assets/car10.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
            <Card
              imageUrl={require("../assets/car8.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
            <Card
              imageUrl={require("../assets/car9.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
            <Card
              imageUrl={require("../assets/car7.png")}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  headerTitle: {
    marginTop: 10,
    top: 25,
    left: 100
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  headerImage: {
    left: 310,
    bottom: 20
  },
  outerCircle: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.dark,
    width: 55,
    height: 55,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "93%",
    width: "93%",
    borderRadius: 50
  },
  searchContainer: {
    marginTop: 10,
    width: 350,
    left: 20
  },
  list: {
    marginTop: 20
  }
});

export default ListingsScreen;
