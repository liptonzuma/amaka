import {View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Typography from '../components/Typography';
import {customColors} from '../shared/colors';
import {NavigationProp} from '@react-navigation/native';
import Button from '../components/Button';

export interface CommonScreenNavigationProps {
  navigation: NavigationProp<any>;
}

export default function Welcome({navigation}: CommonScreenNavigationProps) {
  return (
    <View style={styles.container}>
      <Typography fontSize={20} fontFamily="canela" style={styles.title}>
        AMAKA Assessment Tasks
      </Typography>

      <View style={styles.buttonGroup}>
        <Button
          title="Task One"
          onPress={() => navigation.navigate('task1')}
          variant="secondary"
        />
        <Button
          title="Task two"
          onPress={() => navigation.navigate('task2')}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  buttonGroup: {
    gap: '12@s',
    width: '100%',
  },
  link: {
    marginBottom: '10@s',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  title: {
    marginBottom: '18@s',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColors.amaka_white,
    paddingHorizontal: '20@s',
  },
});
