import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import ProCarComp from './ProCarComp';
import firebase from 'react-native-firebase';
import Shimmer from 'react-native-shimmer';

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('Categories')
      .onSnapshot(datas => {
        this.setState({
          cat: [],
        });
        datas.forEach(doc => {
          this.setState({
            cat: this.state.cat.concat(doc.data()),
          });
        });
      });
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 26,
              color: '#484848',
              marginLeft: 15,
              fontFamily: 'ProductSans-Medium',
            }}>
            Categories
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}>
          {this.state.cat.length === 0 ? (
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 150, height: 200, margin: 10}}>
                <Shimmer>
                  <View
                    style={{
                      height: 150,
                      width: 200,
                      backgroundColor: '#ececec',
                      margin: 10,
                      elevation: 4,
                      borderRadius: 10,
                    }}></View>
                </Shimmer>
              </View>
              <View style={{width: 150, height: 200, margin: 10}}>
                <Shimmer>
                  <View
                    style={{
                      height: 150,
                      width: 200,
                      backgroundColor: '#ececec',
                      margin: 10,
                      elevation: 4,
                      borderRadius: 10,
                    }}></View>
                </Shimmer>
              </View>
              <View style={{width: 150, height: 200, margin: 10}}>
                <Shimmer>
                  <View
                    style={{
                      height: 150,
                      width: 200,
                      backgroundColor: '#ececec',
                      margin: 10,
                      elevation: 4,
                      borderRadius: 10,
                    }}></View>
                </Shimmer>
              </View>
            </View>
          ) : (
            this.state.cat.map(cat => (
              <ProCarComp
                height={150}
                width={120}
                onPress={() =>
                  this.props.navigation.navigate('ProductListScreen', {
                    name: cat.Title,
                  })
                }
                title={cat.Title}
                image={cat.ImageUrl}
              />
            ))
          )}
        </ScrollView>
        <View />
      </View>
    );
  }
}
export default ProductCarousel;
