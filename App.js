import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/Screens/Login';
import HomeScreen from './src/Screens/Home';
import ProductListScreen from './src/Screens/ProductListScreen';
import ProductScreen from './src/Screens/ProductScreen';
import transitionconfig from './transitionconfig';

import firebase from 'react-native-firebase';

var loggeduser = 'null';

firebase.auth().onAuthStateChanged(user => {
  loggeduser = user;
});

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    ProductListScreen: {
      screen: ProductListScreen,
    },
    ProductScreen: {
      screen: ProductScreen,
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: transitionconfig,
  },
);
const App = createAppContainer(LoginStack);

export default App;
