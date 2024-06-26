import {View} from 'react-native';
import React from 'react';
import {s} from 'react-native-size-matters';

export default function Separator() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(229, 228, 229, 1)',
        width: '100%',
        height: 1,
        marginVertical: s(10),
      }}
    />
  );
}
