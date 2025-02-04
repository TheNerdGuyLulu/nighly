import 'app/theme/theme.config.ts';

import { AppRegistry } from 'react-native';
import { enableFreeze } from 'react-native-screens';

import App from './app/App';
import { name as appName } from './app.json';

enableFreeze();

AppRegistry.registerComponent(appName, () => App);
