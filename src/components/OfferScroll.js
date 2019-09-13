import React, {Component} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import ScrollImage from './ScrollImage';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import firebase from 'react-native-firebase';

class OfferScroll extends Component {
  state = {
    activeSlide: 0,
  };

  constructor() {
    super();
  }

  componentDidMount() {}

  get pagination() {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={this.props.entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: -15,
          left: 10,
          right: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  render() {
    return (
      <View style={{height: 280, backgroundColor: '#45be74'}}>
        <Carousel
          data={this.props.entries}
          sliderWidth={Dimensions.get('window').width - 10}
          itemWidth={Dimensions.get('window').width - 10}
          onSnapToItem={index => this.setState({activeSlide: index})}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ScrollImage
                  height={180}
                  width={Dimensions.get('window').width - 50}
                  image={item.Image}
                />
              </View>
            );
          }}
        />
        {this.pagination}
      </View>
    );
  }
}
export default OfferScroll;
