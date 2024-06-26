import {View} from 'react-native';
import React from 'react';
import Typography from './Typography';
import {s} from 'react-native-size-matters';

interface TagProps {
  title: string;
}

export default function Tag({title}: TagProps) {
  return (
    <View
      style={{
        borderRadius: s(300),
        backgroundColor: 'rgba(229, 228, 229, 1)',
        paddingVertical: s(3),
        paddingHorizontal: s(8),
      }}>
      <Typography
        fontSize={9}
        fontWeight="500"
        style={{textTransform: 'uppercase'}}>
        {title}
      </Typography>
    </View>
  );
}
