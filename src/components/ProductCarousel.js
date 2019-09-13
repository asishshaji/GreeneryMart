import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import ProCarComp from "./ProCarComp";

const ProductCarousel = props => (
  <View style={{ marginTop: 10 }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#484848",
          marginLeft: 15
        }}
      >
        Categories
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("ProductDetailScreen")}
        activeOpacity={1}
      >
        <Text
          style={{
            fontSize: 16,
            // fontWeight: "bold",
            color: "#444",
            marginRight: 10
          }}
        >
          View all
        </Text>
      </TouchableOpacity>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      style={{ flex: 1 }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        padding: 5
      }}
    >
      <ProCarComp
        height={150}
        width={120}
        onPress={() => props.navigation.navigate("ProductScreen")}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgvxrQ930gpa28wFRSXOjxqHI-r91Ey8YCDGP7_MmSkv3ngLzWQ"
      />
      <ProCarComp
        height={150}
        width={120}
        onPress={() => props.navigation.navigate("ProductScreen")}
        image="https://www.quickenloans.com/blog/wp-content/uploads/2019/07/Stock-FreshProducePaperBag-102476307.jpg"
      />
      <ProCarComp
        height={150}
        width={120}
        onPress={() => props.navigation.navigate("ProductScreen")}
        image="https://www.quickenloans.com/blog/wp-content/uploads/2019/07/Stock-FreshProducePaperBag-102476307.jpg"
      />
      <ProCarComp
        height={150}
        width={120}
        onPress={() => props.navigation.navigate("ProductScreen")}
        image="https://www.quickenloans.com/blog/wp-content/uploads/2019/07/Stock-FreshProducePaperBag-102476307.jpg"
      />
      <ProCarComp
        height={150}
        width={120}
        onPress={() => props.navigation.navigate("ProductScreen")}
        image="https://www.thehouseandhomestead.com/wp-content/uploads/2017/03/In-Season.jpg"
      />
    </ScrollView>
    <View />
  </View>
);
export default ProductCarousel;
