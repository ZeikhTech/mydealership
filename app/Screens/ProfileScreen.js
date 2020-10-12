import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-elements";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../Components/Form";
import ImageInput from "../Components/Common/ImageInput";
import Screen from "./../Components/Common/Screen";
import routes from "../Navigation/routes";
import colors from "../Config/colors";

const validationSchema = Yup.object().shape({
  fName: Yup.string().required().label("First Name"),
  lName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.number().required().label("Mobile Number")
});

function ProfileScreen({ navigation }) {
  const [image, setImage] = useState();

  const handleSubmit = async () => {
    console.log("submitted");
  };

  const handleImage = (uri) => {
    setImage(uri);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.LISTINGS)}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color={colors.medium}
            />
          </TouchableOpacity>
        </View>
        <Text h4 style={styles.title}>
          Profile
        </Text>
        <Form
          initialValues={{
            fName: "",
            lName: "",
            email: "",
            number: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={styles.image}>
            <ImageInput imageUri={image} onChangeImage={handleImage} />
          </View>
          <FormField name="fName" label="First Name" />
          <FormField name="lName" label="Last Name" />
          <FormField
            keyboardType="email-address"
            name="email"
            label="Email address"
          />
          <FormField
            keyboardType="numeric"
            name="number"
            label="Mobile number"
          />
          <View style={styles.button}>
            <SubmitButton title="Save" />
          </View>
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.light,
    padding: 10
  },
  backButton: {
    top: 35,
    marginLeft: 10
  },
  label: { paddingLeft: 10 },
  title: { alignSelf: "center", marginBottom: 20 },
  image: { alignItems: "center" },
  button: { alignItems: "center" }
});

export default ProfileScreen;
