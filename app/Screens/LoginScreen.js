import React from "react";
import { StyleSheet, View, Image } from "react-native";

import * as Yup from "yup";

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage
} from "../Components/Form";
import Text from "./../Components/Common/Text";
import defaultStyles from "../Config/styles";
import Screen from "../Components/Common/Screen";

const validationSchema = Yup.object().shape({
  stockId: Yup.number().required().label("StockNo.")
});

const handleSubmit = () => {
  console.log("submitted");
};

function LoginScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/favicon.png")}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            You have to Enter your Stock Number to Login
          </Text>
          <Form
            initialValues={{ stockId: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <ErrorMessage error="Invalid Stock Number" />
            <View style={styles.input}>
              <FormField
                style={{
                  elevation: 5,
                  backgroundColor: defaultStyles.colors.light
                }}
                keyboardType="numeric"
                placeholder="Stock No."
                name="stockId"
                width={350}
              />
            </View>
            <View style={styles.agreeContainer}>
              <Text style={styles.agreeText}>
                By loging in, you agree to MY DEALER {"\n"}
                <Text
                  style={styles.agreeLink}
                  onPress={() => console.log("privacy policy")}
                >
                  Privacy Policy
                </Text>{" "}
                and{" "}
                <Text
                  style={styles.agreeLink}
                  onPress={() => console.log("Term of use")}
                >
                  Term of Use
                </Text>
              </Text>
            </View>
            <SubmitButton title="Login" />
          </Form>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  input: {
    elevation: 7
  },
  loginText: {
    marginTop: 140,
    marginBottom: 20,
    fontSize: 16,
    color: defaultStyles.colors.medium
  },
  loginContainer: {
    alignItems: "center",
    padding: 20,
    width: "100%"
  },
  agreeContainer: {
    marginTop: 15
  },
  agreeText: {
    color: defaultStyles.colors.medium,
    fontSize: 15,
    textAlign: "center"
  },
  agreeLink: {
    textDecorationLine: "underline"
  }
});

export default LoginScreen;
