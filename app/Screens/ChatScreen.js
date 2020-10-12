import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import colors from "../Config/colors";
import Screen from "../Components/Common/Screen";
import Text from "./../Components/Common/Text";

function ChatScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Chats</Text>
        <Searchbar style={styles.search} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light
  },
  title: {
    marginTop: 25,
    marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  search: {
    marginTop: 20,
    width: 350,
    alignSelf: "center",
    elevation: 7
  }
});

export default ChatScreen;
