import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {StatusBar} from 'react-native';
import {customColors} from './src/shared/colors';
import {RecoilRoot} from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar
          backgroundColor={customColors.amaka_white}
          barStyle={'dark-content'}
        />
        <StackNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}
