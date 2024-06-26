import {View, Image} from 'react-native';
import React, {useState} from 'react';
import FeedHeader from '../../components/FeedHeader';
import FeedActionButtons from '../../components/FeedActionButtons';
import Typography from '../../components/Typography';
import {ScaledSheet, s} from 'react-native-size-matters';
import Row from '../../components/Row';
import {images} from '../../../assets/images/images';
import {icons} from '../../../assets/icons/icons';
import Button from '../../components/Button';
import {customColors} from '../../shared/colors';

export default function EventFeed() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);
  return (
    <View style={{paddingHorizontal: s(16)}}>
      <FeedHeader />
      <View style={{marginTop: s(8)}}>
        <View>
          <View style={{position: 'relative'}}>
            <Image
              source={images.rect}
              style={{width: '100%', height: s(240), borderRadius: s(10)}}
            />
            <View
              style={{
                position: 'absolute',
                width: '100%',
                bottom: 10,
                paddingHorizontal: s(8),
              }}>
              <Row style={{justifyContent: 'space-between'}}>
                <View style={styles.eventWrapper}>
                  <Image
                    source={icons.eventCalendarWhite}
                    style={styles.icon}
                  />
                </View>

                <Row
                  style={[
                    styles.eventWrapper,
                    {height: s(27), gap: s(6), paddingHorizontal: s(8)},
                  ]}>
                  <Image source={icons.personWhite} style={styles.icon} />
                  <Typography fontSize={12} color={customColors.amaka_white}>
                    10/100
                  </Typography>
                </Row>
              </Row>
            </View>
          </View>
        </View>

        <View>
          <Typography
            fontFamily="canela"
            fontSize={18}
            style={{marginTop: s(12)}}>
            NY Music Festival
          </Typography>
          <Row
            style={{
              marginTop: s(12),
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <View style={{width: '60%', gap: s(10)}}>
              <Row style={{gap: s(6)}}>
                <Image source={icons.calendar} style={styles.icon} />
                <Typography fontWeight="500">
                  19th Sep '23 | 10:00 AM
                </Typography>
              </Row>

              <Row style={{gap: s(6)}}>
                <Image source={icons.location} style={styles.icon} />
                <Typography>Online event</Typography>
              </Row>

              <Row style={{gap: s(6)}}>
                <Image source={icons.money} style={styles.icon} />
                <Typography>Starts at £70.00</Typography>
              </Row>
            </View>

            <View style={{width: '35%'}}>
              <Button
                title="Book it"
                onPress={() => {}}
                textStyle={{
                  fontWeight: '500',
                }}
              />
            </View>
          </Row>
        </View>
      </View>
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
  eventWrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    minWidth: '32@s',
    height: '32@s',
    borderRadius: '40@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '16@s',
    height: '16@s',
  },
});
