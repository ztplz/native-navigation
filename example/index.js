/* eslint global-require: 0 */
import Navigator from 'native-navigation';

Navigator.registerScreen('Example', () => require('./screens/Example'));
Navigator.registerScreen('ScreenOne', () => require('./screens/NavigationExampleScreen'));
