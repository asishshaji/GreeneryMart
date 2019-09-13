import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

class ProductsScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://naturallyorganic.co.nz/wp-content/uploads/products/19997.jpg"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "data:image/jpeg;base64,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"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/all_about_mushrooms_slideshow/493ss_thinkstock_rf_poisonous_mushroom.jpg"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "data:image/jpeg;base64,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"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBpvC4bTiGsUMq7km20aW_QkxrLPLDeOnaVoPczvm2oDPurjm"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/all_about_mushrooms_slideshow/493ss_thinkstock_rf_poisonous_mushroom.jpg"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/all_about_mushrooms_slideshow/493ss_thinkstock_rf_poisonous_mushroom.jpg"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 250,
              width: Dimensions.get("window").width / 2 - 5,
              borderWidth: 1,
              borderColor: "#f0f0f0",
              padding: 10
              // margin:
            }}
          >
            <Image
              source={{
                uri:
                  "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/all_about_mushrooms_slideshow/493ss_thinkstock_rf_poisonous_mushroom.jpg"
              }}
              style={{ flex: 5 }}
            />
            <View style={{ flex: 1, padding: 5 }}>
              <Text style={{}} ellipsizeMode="tail" numberOfLines={1}>
                Thanvi Mushroom White Oyster Mushroom Mycelium Spores Spawn
                400g, Pleurotus Florida Spawn Seed (2 per packet)
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>₹999</Text>
                <Text style={{ marginLeft: 10, fontSize: 12 }}>1̶2̶9̶9̶</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 5,
    marginTop: 5,
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
  }
});
