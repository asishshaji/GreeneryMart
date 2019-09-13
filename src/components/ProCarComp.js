import React from "react";
import { View, Text, Image ,TouchableOpacity} from "react-native";

const ProCarComp = props => (
  <TouchableOpacity onPress={() => props.onPress()} style={{ flex: 1 }} activeOpacity={1}>
    <View style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          position: "absolute",
          zIndex: 10000,
          bottom: 5,
          left: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 5,
          elevation: 2
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Mushroom
        </Text>
      </View>
      <View
        style={{
          height: props.height, //150
          backgroundColor: "#fff",
          margin: 10,
          width: props.width, //200
          borderRadius: 10,
          elevation: 2
        }}
      >
        <Image
          style={{ flex: 1, borderRadius: 10 }}
          resizeMode="cover"
          source={{
            uri: props.image
          }}
        />
      </View>
    </View>
  </TouchableOpacity>
);
export default ProCarComp;
