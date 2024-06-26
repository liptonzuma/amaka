import {View} from 'react-native';
import React from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import Row from '../../components/Row';
import Typography from '../../components/Typography';
import {customColors} from '../../shared/colors';
import Button from '../../components/Button';

export default function BannerFeed() {
  return (
    <View style={{paddingHorizontal: s(16)}}>
      <View style={styles.container}>
        <View style={styles.circleLeft} />
        <Row style={{justifyContent: 'space-between'}}>
          <View style={styles.content}>
            <Typography fontWeight="500" fontSize={12}>
              Unlock limitless possibilities with AMAKA
            </Typography>
            <Typography fontSize={12} color={customColors.amaka_white}>
              – Start creating events today!
            </Typography>
          </View>

          <Button
            title="Get started"
            onPress={() => {}}
            containerStyle={{width: s(72), height: s(24), borderRadius: s(5)}}
            textStyle={{fontSize: s(10)}}
          />
        </Row>
        <View style={styles.circleRight} />
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  circleRight: {
    width: '120@s',
    height: '120@s',
    borderRadius: '102@s',
    backgroundColor: 'rgba(227, 205, 229, 1)',
    position: 'absolute',
    right: -55,
    top: -65,
    zIndex: -1,
  },
  circleLeft: {
    backgroundColor: 'transparent',
    borderWidth: '1@s',
    borderColor: 'rgba(227, 205, 229, 1)',
    width: '104@s',
    height: '104@s',
    borderRadius: '104@s',
    position: 'absolute',
    left: -12,
    top: -22,
    zIndex: -1,
  },
  content: {
    width: '75%',
    gap: '4@s',
    position: 'relative',
    // zIndex: 50,
  },
  container: {
    flex: 1,
    padding: '10@s',
    justifyContent: 'center',
    overflow: 'hidden',
    minHeight: '80@s',
    height: '100%',
    backgroundColor: 'rgba(186, 129, 190, 1)',
  },
});
