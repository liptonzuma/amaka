import {View, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import Typography from './Typography';
import {s} from 'react-native-size-matters';
import {customColors} from '../shared/colors';
import Row from './Row';

interface PoolAnswerProps {
  isSelectedAnswer?: boolean;
  title: string;
  numberOfSelections?: number;
  totalVotes?: number;
  animate?: boolean;
  onSelect?: () => void;
}

const PoolAnswer = ({
  isSelectedAnswer,
  title,
  numberOfSelections = 0,
  totalVotes = 0,
  animate,
  onSelect,
}: PoolAnswerProps) => {
  const width = useSharedValue('0%');

  useEffect(() => {
    if (animate) {
      const percentage = (numberOfSelections / totalVotes) * 100;
      width.value = withTiming(`${percentage}%`, {
        duration: 300,
      });
    }
  }, [animate]);

  return (
    <Pressable
      onPress={onSelect}
      style={{
        borderWidth: s(1),
        borderRadius: s(5),
        borderColor: isSelectedAnswer
          ? customColors.amaka_blue
          : 'rgba(229, 228, 229, 1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          padding: s(2),
          top: 0,
        }}>
        <Animated.View
          // @ts-ignore
          style={{
            backgroundColor: isSelectedAnswer
              ? 'rgba(213, 215, 252, 1)'
              : 'rgba(229, 228, 229, 1)',
            borderRadius: s(5),
            width,
            height: '100%',
          }}></Animated.View>
      </View>
      <Row style={{justifyContent: 'space-between'}}>
        <Typography
          style={{
            lineHeight: s(22),
            padding: s(8),
            maxWidth: '90%',
          }}
          fontWeight={isSelectedAnswer ? '500' : '400'}
          color={
            animate
              ? isSelectedAnswer
                ? customColors.amaka_blue
                : customColors.amaka_gray
              : customColors.amaka_black
          }>
          {title}
        </Typography>

        {animate ? (
          <Typography
            style={{
              lineHeight: s(22),
              padding: s(8),
              maxWidth: '90%',
            }}
            fontWeight={isSelectedAnswer ? '500' : '400'}
            color={
              animate
                ? isSelectedAnswer
                  ? customColors.amaka_blue
                  : customColors.amaka_gray
                : customColors.amaka_black
            }>
            {((numberOfSelections / totalVotes) * 100).toFixed()}%
          </Typography>
        ) : null}
      </Row>
    </Pressable>
  );
};

export default PoolAnswer;
