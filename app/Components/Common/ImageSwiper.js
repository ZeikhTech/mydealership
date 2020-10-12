import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

import colors from "../../Config/colors";

const images = [
  { id: 1, uri: require("../../assets/unnamed.png") },
  { id: 2, uri: require("../../assets/car1.png") },
  { id: 3, uri: require("../../assets/car2.png") },
  { id: 4, uri: require("../../assets/car3.png") }
];

function ImageSwiper(props) {
  return (
    <View style={styles.container}>
      <Swiper
        dot={
          <View
            style={{
              backgroundColor: colors.placeholder,
              width: 7,
              height: 7,
              borderRadius: 7,
              marginLeft: 4,
              marginRight: 4
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: colors.medium,
              width: 7,
              height: 7,
              borderRadius: 7,
              marginLeft: 4,
              marginRight: 4
            }}
          />
        }
        paginationStyle={{
          bottom: 12
        }}
        loop={false}
      >
        {images.map((image, index) => {
          return (
            <View style={styles.slide} key={`image-${image.id}-${index}`}>
              <Image
                style={styles.image}
                source={image.uri}
                resizeMode="contain"
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    elevation: 5,
    borderBottomRightRadius: 110,
    backgroundColor: colors.white
  },
  slide: {
    width: 390,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  image: {
    width: 365,
    height: 250
  }
});

export default ImageSwiper;
