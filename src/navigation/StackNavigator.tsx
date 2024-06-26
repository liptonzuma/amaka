import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Feeds from '../screens/task2/Feeds';
import TaskOne from '../screens/task1/TaskOne';

import Header from '../screens/task2/Header';

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="task1" component={TaskOne} />
      <Stack.Screen
        name="task2"
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
        component={Feeds}
      />
    </Stack.Navigator>
  );
}
