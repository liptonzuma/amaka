import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import Typography from './Typography';
import {ScaledSheet} from 'react-native-size-matters';
import {customColors} from '../shared/colors';

interface CustomButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export default function Button({
  title,
  variant = 'primary',
  onPress,
  textStyle,
  containerStyle,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          backgroundColor:
            variant === 'primary'
              ? customColors.amaka_blue
              : customColors.amaka_purple,
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <Typography style={[textStyle]} color={customColors.amaka_white}>
        {title}
      </Typography>
    </TouchableOpacity>
  );
}

const styles = ScaledSheet.create({
  container: {
    height: '40@s',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10@s',
  },
});
