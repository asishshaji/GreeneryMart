import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const FeatureComp = props => (
  <View
    style={{
      width: "90%",
      height: 200,
      backgroundColor: "#f3f2f2",
      borderRadius: 10,
      margin: 10
    }}
  >
    <Image
      style={{ borderRadius: 10, flex: 1, resizeMode: "cover" }}
      source={{
        uri: props.image
      }}
    />
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "black",
        opacity: 0.4,
        borderRadius: 10
      }}
    />
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: 40,
        bottom: 10,
        right: 20,
        left: 20,
        borderRadius: 10
        // backgroundColor: "red"
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#fff",
            //   backgroundColor: "red",
            textAlign: "center",
            fontSize: 26,
            fontWeight: "bold"
          }}
        >
          {props.name}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20
        }}
      >
        <Icon
          reverse
          name="ios-call"
          type="ionicon"
          color="#fff"
          raised
          iconStyle={{ color: "#7c7c7c" }}
        />
        <Icon
          reverse
          name="ios-text"
          type="ionicon"
          color="#fff"
          raised
          iconStyle={{ color: "#7c7c7c" }}
        />
      </View>
    </View>
  </View>
);
export default FeatureComp;
