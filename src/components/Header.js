import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const HeaderComp = props => (
  <View
    style={{
      height: 50,
      position: "absolute",
      top: 5,
      left: 0,
      right: 0,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "transparent",
      flexDirection: "row",
      zIndex: 10000000
    }}
  >
    <Icon
      reverse
      name="ios-search"
      type="ionicon"
      color="#fff"
      raised
      iconStyle={{ color: "#7c7c7c" }}
    />
  </View>
);
export default HeaderComp;
