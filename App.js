import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/Screens/Login';
import HomeScreen from './src/Screens/Home';
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
  },
  {
    initialRouteName: loggeduser === null ? 'Login' : 'Home',
  },
);
const App = createAppContainer(LoginStack);

export default App;
