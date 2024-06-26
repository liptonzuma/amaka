import {View, Text, ViewProps} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {s} from 'react-native-size-matters';

export default function Container(props: ViewProps) {
  const {style, ...rest} = props;

  const offset = useSafeAreaInsets();
  return <View style={[style, {paddingTop: offset.top}]} {...rest} />;
}
