import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import OfferScroll from '../components/OfferScroll';
import ProductCarousel from '../components/ProductCarousel';
import firebase from 'react-native-firebase';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };
    this.ref = firebase.firestore().collection('Offers');
  }
  componentDidMount() {
    this.ref.onSnapshot(querySnapshot => {
      this.setState({
        entries: [],
      });
      querySnapshot.forEach(doc => {
        this.setState({
          entries: this.state.entries.concat(doc.data()),
        });
      });
    });
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          overScrollMode="never">
          <OfferScroll entries={this.state.entries} />
          <View style={{marginTop: 10}}>
            <ProductCarousel navigation={this.props.navigation} />
          </View>
          {/* <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#484848',
              marginLeft: 15,
              // backgroundColor: "red",
              marginTop: 20,
              marginBottom: 20,
            }}>
            Featured Items
          </Text>
          <View
            style={{
              marginBottom: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FeatureComp
              image="https://www.quickenloans.com/blog/wp-content/uploads/2019/07/Stock-FreshProducePaperBag-102476307.jpg"
              name="Chippy Mushroom"
            />
            <FeatureComp
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgvxrQ930gpa28wFRSXOjxqHI-r91Ey8YCDGP7_MmSkv3ngLzWQ"
              name="Mushroom"
            />
          </View> */}
        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
