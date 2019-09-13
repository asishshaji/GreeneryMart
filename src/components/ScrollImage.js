import React from "react";
import { View, Text, Image } from "react-native";

const ScrollImage = props => (
  <View
    style={{
      height: props.height, //150
      backgroundColor: "#fff",
      margin: 10,
      width: props.width, //200
      elevation: 2,
      borderRadius: 10
    }}
  >
    <Image
      style={{ flex: 1, borderRadius: 10 }}
      source={{
        uri:
          props.image
      }}
    />
  </View>
);
export default ScrollImage;
