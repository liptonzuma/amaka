import {Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {s} from 'react-native-size-matters';
import {customColors} from '../shared/colors';

type AvailableFontFamily = 'canela' | 'neue_montreal';
type FontWeightOptions = '400' | '500' | '700';

interface CustomProps {
  fontFamily?: AvailableFontFamily;
  fontWeight?: FontWeightOptions;
  fontSize?: number;
  color?: string;
  centered?: boolean;
}

export default function Typography(props: TextProps & CustomProps) {
  const {
    style,
    fontFamily = 'neue_montreal',
    fontSize = 14,
    fontWeight = '400',
    color = customColors.amaka_black,
    centered,
    ...rest
  } = props;

  function getFontFamily() {
    if (fontFamily === 'canela') {
      switch (fontWeight) {
        case '400':
          return 'Canela-Regular';
        case '500':
          return 'Canela-Medium';

        case '700':
          return 'Canela-Bold';
        default:
          return 'Canela-Regular';
      }
    } else {
      switch (fontWeight) {
        case '400':
          return 'NeueMontreal-Regular';
        case '500':
          return 'NeueMontreal-Medium';
        case '700':
          return 'NeueMontreal-Bold';
        default:
          return 'NeueMontreal-Regular';
      }
    }
  }
  function getStylesBasedOnProps(): TextStyle {
    return {
      fontFamily: getFontFamily(),
      fontSize: s(fontSize),
      color,
      fontWeight,
    };
  }
  return (
    <Text
      {...rest}
      style={[
        getStylesBasedOnProps(),
        centered && {textAlign: 'center'},
        style,
      ]}
    />
  );
}
