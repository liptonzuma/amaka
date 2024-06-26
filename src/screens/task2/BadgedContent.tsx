import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import Typography from '../../components/Typography';
import {ScaledSheet, s} from 'react-native-size-matters';
import Row from '../../components/Row';
import {images} from '../../../assets/images/images';
import Tag from '../../components/Tag';
import FeedHeader from '../../components/FeedHeader';
import FeedActionButtons from '../../components/FeedActionButtons';

interface BadgedContentProps {
  hasImage?: boolean;
}

export default function BadgedContent({hasImage}: BadgedContentProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  return (
    <View style={{paddingHorizontal: s(16)}}>
      <FeedHeader isExclusive />
      <Row style={{marginTop: s(8), justifyContent: 'space-between'}}>
        <View style={{width: hasImage ? '65%' : '100%'}}>
          <Typography
            fontFamily="canela"
            fontSize={16.5}
            style={{lineHeight: s(22)}}>
            Lorem ipsum dolor sit amet consectetur. Aliquam ornare vivamus ut
            risus mauris quam.
          </Typography>

          <Row style={{marginTop: s(8), gap: s(10)}}>
            <Tag title="design" />
            <Tag title="lagos" />
          </Row>
        </View>
        {hasImage && (
          <Pressable>
            <Image
              resizeMode="cover"
              source={images.students}
              style={styles.image}
            />
          </Pressable>
        )}
      </Row>
      <FeedActionButtons
        isBookMarked={isBookMarked}
        onBookMark={() => setIsBookMarked(!isBookMarked)}
        isLiked={isLiked}
        onLike={() => setIsLiked(!isLiked)}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  image: {
    width: '100@s',
    height: '90@s',
    borderRadius: '4@s',
  },
});
