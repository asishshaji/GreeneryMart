import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import firebase from 'react-native-firebase';
const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selected: 0,
    bottom: new Animated.Value(-55),
    phonenumber: null,
    height: new Animated.Value(0),
    otp: null,
    confirmResult: null,
  };

  componentDidMount() {
    Animated.timing(this.state.bottom, {
      toValue: 12,
      duration: 800,
      easing: Easing.linear,
    }).start();
    Animated.timing(this.state.height, {
      toValue: 200,
      duration: 400,
      easing: Easing.linear,
    }).start();
  }

  renderPhone() {
    console.disableYellowBox = true;
    return (
      <Animated.View
        style={[styles.formContainer, {height: this.state.height}]}>
        <View style={styles.collectionContainer}>
          <Fumi
            label={'PHONE NUMBER'}
            iconClass={FontAwesomeIcon}
            iconName={'phone'}
            iconColor={'#45be74'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6e6e6e',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="numeric"
            value={this.state.phonenumber}
            onChangeText={value => this.setState({phonenumber: value})}
          />
        </View>
      </Animated.View>
    );
  }

  renderOTP() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.collectionContainer}>
          <Fumi
            label={'OTP'}
            iconClass={FontAwesomeIcon}
            iconName={'key'}
            iconColor={'#45be74'}
            inputPadding={16}
            labelHeight={20}
            inputStyle={{
              color: '#6e6e6e',
              fontFamily: 'OpenSans-Regular',
            }}
            borderHeight={2}
            // TextInput props
            autoCapitalize={'none'}
            autoCorrect={false}
            onChangeText={value => this.setState({otp: value})}
          />
        </View>
      </View>
    );
  }

  clicked = () => {
    const phonenumber = '+91' + this.state.phonenumber;
    if (this.state.selected === 0) {
      firebase
        .auth()
        .signInWithPhoneNumber('+919400376256')
        .then(confirmResult =>
          this.setState({selected: 1, confirmResult: confirmResult}),
        )
        .catch(error => alert(error));
    } else {
      this.state.confirmResult
        .confirm('123456')
        .then(user => {
          this.props.navigation.navigate('Home');
        })
        .catch(error => alert(error));
    }
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{flex: 1}}>
        {/* Submit button */}
        <AnimatedTouch
          style={{
            elevation: 10,
            height: 55,
            width: 55,
            borderRadius: 55 / 2,
            position: 'absolute',
            bottom: this.state.bottom,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#45be74',
            zIndex: 100000,
          }}
          activeOpacity={1}
          onPress={this.clicked}>
          <FontAwesomeIcon name="chevron-right" size={16} color="#fff" raised />
        </AnimatedTouch>
        <View style={styles.container}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri:
                  'https://cdn.dribbble.com/users/405391/screenshots/7057605/media/93ede017f7eee49b240d1d0b4b118aab.jpg',
              }}
              style={styles.logoStyle}
            />
          </View>

          {/* Form Section */}
          {this.state.selected === 0 ? this.renderPhone() : this.renderOTP()}
        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyle: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
  },
  logoContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionContainer: {
    padding: 30,
  },
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    justifyContent: 'center',
    elevation: 2,
    borderTopLeftRadius: 40,
    backgroundColor: '#f2f2f2',
  },
  loginHeader: {
    // marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#6e6e6e',
  },
});
