import {View, ViewProps} from 'react-native';
import React from 'react';

export default function Row(props: ViewProps) {
  const {style, ...rest} = props;
  return (
    <View
      style={[{flexDirection: 'row', alignItems: 'center'}, style]}
      {...rest}
    />
  );
}
