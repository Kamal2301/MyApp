import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './src/App';

MaterialCommunityIcons.loadFont();
AppRegistry.registerComponent(appName, () => App);
