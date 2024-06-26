import {Image, Pressable} from 'react-native';
import React from 'react';
import {FontAwesome, Ionicons, Feather} from '@expo/vector-icons';
import {s} from 'react-native-size-matters';
import {icons} from '../../assets/icons/icons';
import {customColors} from '../shared/colors';
import Row from './Row';
import Typography from './Typography';

type fn = () => void;

interface FeedActionButtonsProps {
  isLiked?: boolean;
  isBookMarked?: boolean;
  onLike?: fn;
  onBookMark?: fn;
  onMessage?: fn;
  onUpload?: fn;
  likesCount?: number | string;
  bookMarksCount?: number | string;
  commentsCount?: number | string;
  onComment?: fn;
  onView?: fn;
  viewCounts?: number | string;
}

export default function FeedActionButtons({
  isLiked,
  likesCount = '3.2K',
  bookMarksCount = '1.4K',
  isBookMarked,
  onLike,
  onBookMark,
  commentsCount = '1.4K',
  onComment,
  viewCounts = '1.2M',
}: FeedActionButtonsProps) {
  return (
    <Row style={{justifyContent: 'space-between'}}>
      <Row style={{marginTop: s(16), gap: s(16)}}>
        {/* likes */}
        <Row style={{gap: s(4)}}>
          <FontAwesome
            name={isLiked ? 'heart' : 'heart-o'}
            size={16}
            color={isLiked ? 'red' : customColors.amaka_gray}
            onPress={onLike}
          />
          <Typography fontSize={12} color={customColors.amaka_gray}>
            {likesCount}
          </Typography>
        </Row>
        {/* bookmarks */}
        <Row style={{gap: s(4)}}>
          <Ionicons
            name={isBookMarked ? 'bookmark' : 'bookmark-outline'}
            size={18}
            color={
              isBookMarked ? customColors.amaka_blue : customColors.amaka_gray
            }
            onPress={onBookMark}
          />
          <Typography fontSize={12} color={customColors.amaka_gray}>
            {bookMarksCount}
          </Typography>
        </Row>
        {/* comments */}
        <Pressable onPress={onComment}>
          <Row style={{gap: s(4)}}>
            <Feather
              name="message-square"
              size={16}
              color={customColors.amaka_gray}
            />
            <Typography fontSize={12} color={customColors.amaka_gray}>
              {commentsCount}
            </Typography>
          </Row>
        </Pressable>
        {/* reach */}
        <Row style={{gap: s(4)}}>
          <Image source={icons.bars} style={{width: s(16), height: s(16)}} />
          <Typography fontSize={12} color={customColors.amaka_gray}>
            {viewCounts}
          </Typography>
        </Row>
      </Row>

      {/* share */}
      <Row style={{gap: s(4)}}>
        <Image
          source={icons.uploadGray}
          style={{width: s(16), height: s(16)}}
        />
      </Row>
    </Row>
  );
}
