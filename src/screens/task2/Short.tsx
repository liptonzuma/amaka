import {
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Entypo} from '@expo/vector-icons';
import {customColors} from '../../shared/colors';
import Typography from '../../components/Typography';

interface Props {
  thumbnail: ImageSourcePropType;
  caption?: string;
}
export default function Short({
  thumbnail,
  caption = 'Lorem ipsum dolor sit amet consectetur',
}: Props) {
  return (
    <Pressable>
      <ImageBackground source={thumbnail} style={styles.container}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Entypo
            name="dots-three-vertical"
            size={14}
            color={customColors.amaka_white}
          />
        </TouchableOpacity>

        <Typography
          fontSize={13}
          numberOfLines={2}
          fontWeight="500"
          style={styles.caption}>
          {caption}
        </Typography>
      </ImageBackground>
    </Pressable>
  );
}

const styles = ScaledSheet.create({
  caption: {
    position: 'absolute',
    bottom: '0@s',
    width: '100%',
    padding: '10@s',
    color: customColors.amaka_white,
  },
  content: {
    width: '169@s',
    height: '252@s',
  },
  container: {
    width: '169@s',
    height: '252@s',
    overflow: 'hidden',
    borderRadius: '10@s',
    padding: '10@s',
  },
});
