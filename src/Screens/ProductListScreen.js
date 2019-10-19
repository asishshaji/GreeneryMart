import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import firebase from 'react-native-firebase';
import BackButton from '../components/BackButton';

export default class ProductListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
      headerTitleStyle: {
        fontFamily: 'ProductSans-Regular',
      },
    };
  };
  componentDidMount() {
    firebase
      .firestore()
      .collection(this.props.navigation.getParam('name'))
      .onSnapshot(datas => {
        this.setState({
          products: [],
        });
        datas.forEach(doc => {
          this.setState({
            products: this.state.products.concat(doc.data()),
          });
        });
      });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatGrid
          itemDimension={150}
          items={this.state.products}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={15}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[styles.itemContainer]}
                activeOpacity={1}
                onPress={() =>
                  this.props.navigation.navigate('ProductScreen', {item: item})
                }>
                <Image
                  source={{uri: item.ImageUrl}}
                  style={{resizeMode: 'cover', height: 100, borderRadius: 4}}
                />
                <View style={{padding: 10}}>
                  <Text style={styles.itemName}>{item.Title}</Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'ProductSans-Regular',
                      fontSize: 15,
                    }}>
                    ₹{item.Price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: '#fbfbfb',
  },
  itemContainer: {
    height: 180,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 5,
  },
  itemName: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'ProductSans-Regular',
    textAlign: 'center',
  },
});
