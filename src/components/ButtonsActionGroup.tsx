import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import {icons} from '../../assets/icons/icons';
import {customColors} from '../shared/colors';
import Typography from './Typography';

export default function ButtonsActionGroup() {
  const handleLikePressed = () => {
    Alert.alert('Liked', 'You pressed the like button');
  };

  const handleCommentPressed = () => {
    Alert.alert('Comment', 'You pressed the Comment button');
  };

  const handleHireButtonPressed = () => {
    Alert.alert('Hire', 'Hire button Pressed');
  };

  const handleUploadButtonPressed = () => {
    Alert.alert('Upload', 'Upload button Pressed');
  };

  const handleOptionButtonPressed = () => {
    Alert.alert('Options', 'Options button Pressed');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleLikePressed}>
        <Image style={styles.actionIcon} source={icons.heartWhite} />
        <Typography centered fontSize={12} color={customColors.amaka_white}>
          3.2K
        </Typography>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={handleCommentPressed}>
        <Image style={styles.actionIcon} source={icons.commentIcon} />
        <Typography centered fontSize={12} color={customColors.amaka_white}>
          14K
        </Typography>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={handleHireButtonPressed}>
        <Image style={styles.actionIcon} source={icons.hireIcon} />
        <Typography centered fontSize={12} color={customColors.amaka_white}>
          Hire
        </Typography>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={handleUploadButtonPressed}>
        <Image style={styles.actionIcon} source={icons.uploadIcon} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={handleOptionButtonPressed}>
        <Image style={styles.actionIcon} source={icons.horizontalDots} />
      </TouchableOpacity>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    gap: '12@s',
    position: 'absolute',
    right: '-40@s',
    bottom: '-10@s',
  },
  actionIcon: {
    width: '32@s',
    height: '32@s',
    marginBottom: '4@s',
  },
});
