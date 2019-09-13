import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Icon, Button } from "react-native-elements";

class ProductScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            height: 70,
            top: 0,
            left: 0,
            right: 0,
            // backgroundColor: "red",
            zIndex: 1000
          }}
        >
          <Icon
            raised
            name="ios-arrow-back"
            type="ionicon"
            color="#517fa4"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>

        <View style={{ flex: 2, backgroundColor: "#fff" }}>
          <Image
            source={{
              uri:
                "https://rukminim1.flixcart.com/image/416/416/jt4olu80/plant-seed/u/h/z/2-dia47895-dia-mushroom-original-imafejyhjqhzue88.jpeg?q=70"
            }}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1, marginTop: 10, padding: 10 }}>
          <Text style={{ fontSize: 20, textAlign: "left" }}>
            GreenRoots Dried Oyster Mushrooms 50 g
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: "left",
                fontWeight: "bold",
                marginTop: 10
              }}
            >
              ₹ 399
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontWeight: "300",
                marginTop: 10,
                marginLeft: 10,
                color: "#818181"
              }}
            >
              1̶2̶9̶9̶
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            right: 0,
            backgroundColor: "red",
            zIndex: 10000,

            flexDirection: "row",
            justifyContent: "space-between",
            elevation: 10
          }}
        >
          <Button
            title="ADD TO CART"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            containerStyle={{ flex: 1 }}
            raised
            buttonStyle={{
              height: 45,
              borderRadius: 0,
              backgroundColor: "#fff"
            }}
          />
          <Button
            title="BUY NOW"
            titleStyle={{
              fontSize: 14
            }}
            containerStyle={{ flex: 1 }}
            raised
            buttonStyle={{
              backgroundColor: "#59c655",
              height: 45,
              borderRadius: 0
            }}
          />
        </View>
      </View>
    );
  }
}
export default ProductScreen;
