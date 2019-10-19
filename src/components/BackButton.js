import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';

const BackButton = props => (
  <View
    style={{
      position: 'absolute',
      height: 70,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    }}>
    <Icon
      raised
      name="ios-arrow-back"
      type="ionicon"
      color="#517fa4"
      iconStyle={{elevation: 10,color:'#000'}}
      onPress={() => props.navigation.goBack()}
    />
  </View>
);
export default BackButton;
