import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-size-matters';
import {icons} from '../../assets/icons/icons';
import {customColors} from '../shared/colors';
import Avatar from './Avatar';
import Row from './Row';
import Typography from './Typography';

interface FeedHeaderProps {
  isExclusive?: boolean;
  createrName?: string;
  createdAt?: string;
  isVerified?: boolean;
  morePressHandler?: () => void;
  avatarUrl?: string;
}

export default function FeedHeader({
  isExclusive = false,
  createrName = 'Rosanna Pansino',
  createdAt = '1h',
}: FeedHeaderProps) {
  return (
    <Row style={{justifyContent: 'space-between'}}>
      <Row style={{gap: s(5)}}>
        <Avatar size={24} />
        <Row style={{gap: s(4)}}>
          <Typography
            style={{maxWidth: 120}}
            fontWeight="500"
            fontSize={12}
            numberOfLines={1}>
            {createrName}
          </Typography>
          <Image
            source={icons.verifiedBadgeIcon}
            style={{width: s(16), height: s(16)}}
          />
        </Row>
        <Row style={{gap: s(4)}}>
          <Typography color="rgba(229, 228, 229, 1)">&bull;</Typography>
          <Typography fontSize={10} color={customColors.amaka_gray}>
            {createdAt}
          </Typography>
          {isExclusive ? (
            <Row>
              <Typography color="rgba(229, 228, 229, 1)">&bull;</Typography>
              <Row style={{gap: s(2), marginLeft: s(4)}}>
                <Image
                  source={icons.exclusiveContentStar}
                  style={{width: s(16), height: s(16)}}
                />
                <Typography fontSize={10} color={customColors.amaka_gray}>
                  Exclusive content
                </Typography>
              </Row>
            </Row>
          ) : null}
        </Row>
      </Row>
      <TouchableOpacity>
        <Image
          source={icons.horizontalDotsGray}
          style={{width: s(24), height: s(24)}}
        />
      </TouchableOpacity>
    </Row>
  );
}
