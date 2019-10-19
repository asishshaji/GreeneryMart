import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import BackButton from '../components/BackButton';

const {width, height} = Dimensions.get('window');
class ProductScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.scrollHeight = new Animated.Value(0);
  }

  render() {
    const item = this.props.navigation.getParam('item');
    var header = this.scrollHeight.interpolate({
      inputRange: [0, height / 2],
      outputRange: [height / 2, 0],
    });
    return (
      <View style={{flex: 1}}>
        <BackButton navigation={this.props.navigation} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {contentOffset: {y: this.scrollHeight}},
            },
          ])}
          contentContainerStyle={{paddingBottom: 20}}>
          <View style={{flex: 1}}>
            <Animated.View style={{height: header}}>
              <Image
                source={{
                  uri: item.ImageUrl,
                }}
                style={{flex: 1, height: 200, backgroundColor: '#fff'}}
                resizeMode="cover"
              />
            </Animated.View>
            <View style={{flex: 1, marginTop: 10, padding: 10}}>
              <Text
                style={{
                  fontSize: 26,
                  textAlign: 'left',
                  fontFamily: 'ProductSans-Regular',
                }}>
                {item.Title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'left',
                  fontFamily: 'ProductSans-Black',
                  padding: 5,
                  marginTop: 10,
                }}>
                ₹{item.Price}
              </Text>

              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  padding: 5,
                  paddingBottom: 40,
                  fontSize: 18,
                }}>
                {item.Details}
              </Text>
            </View>
          </View>
        </Animated.ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            right: 0,
            backgroundColor: 'red',
            zIndex: 10000,

            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 10,
          }}>
          <Button
            title="ADD TO CART"
            titleStyle={{
              color: 'black',
              fontSize: 14,
            }}
            containerStyle={{flex: 1}}
            raised
            buttonStyle={{
              height: 45,
              borderRadius: 0,
              backgroundColor: '#fff',
            }}
          />
          <Button
            title="BUY NOW"
            titleStyle={{
              fontSize: 14,
            }}
            containerStyle={{flex: 1}}
            raised
            buttonStyle={{
              backgroundColor: '#59c655',
              height: 45,
              borderRadius: 0,
            }}
          />
        </View>
      </View>
    );
  }
}
export default ProductScreen;
