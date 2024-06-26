import {View, Image} from 'react-native';
import React from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import {images} from '../../assets/images/images';

interface AvatarProps {
  size?: number;
  src?: any;
}

export default function Avatar({size = 40, src}: AvatarProps) {
  return (
    <View style={[styles.container, {width: s(size), height: s(size)}]}>
      <Image
        source={src || images.avatarPlaceholder}
        resizeMode="contain"
        style={styles.img}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: '#f5f5f5',
    borderRadius: '500@s',
    width: '40@s',
    height: '40@s',
    overflow: 'hidden',
  },
});
