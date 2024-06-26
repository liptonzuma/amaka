import {View, Text, Dimensions, Platform, Pressable, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FeedHeader from '../../components/FeedHeader';
import {s} from 'react-native-size-matters';
import Typography from '../../components/Typography';
import {ResizeMode, Video} from 'expo-av';
import FeedActionButtons from '../../components/FeedActionButtons';
import {icons} from '../../../assets/icons/icons';

const width = s(Dimensions.get('screen').width - 32);

export default function VideoContentFeed() {
  const [videoHeight, setVideoHeight] = useState(500);
  const [videoWidth, setVideoWidth] = useState(width);

  const [isLiked, setIsLiked] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<Video>(null);

  async function handleOnPlayBackStatusChanged(status: any) {
    try {
      if (status.didJustFinish) {
        await videoRef.current?.setPositionAsync(0);
        await videoRef.current?.pauseAsync();
      }
      setIsPlaying(status.isPlaying);
    } catch (error) {
      console.log('Something went wrong in video player', error);
    }
  }

  async function handleVideoTap() {
    try {
      if (videoRef.current) {
        if (!isPlaying) {
          await videoRef.current?.playAsync();
          return;
        }
        await videoRef.current?.pauseAsync();
      }
    } catch (error) {
      console.log('something went wrong>>>', error);
    }
  }

  return (
    <View style={{paddingHorizontal: s(16)}}>
      <FeedHeader createrName="Selina Gomez" createdAt="2w" />
      <View style={{marginVertical: s(8)}}>
        <Typography
          fontFamily="canela"
          fontSize={16.5}
          style={{lineHeight: s(22)}}>
          Weaving Independence: Akwete Women's Fabric Empowerment
        </Typography>
        <View
          style={{
            marginTop: s(8),
            maxHeight: s(600),
            maxWidth: width,
            borderRadius: s(10),
            backgroundColor: '#f5f5f5',
            position: 'relative',
          }}>
          <Video
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            style={{
              width: videoWidth,
              maxWidth: '100%',
              minHeight: videoHeight,
              borderRadius: s(10),
            }}
            useNativeControls={isPlaying}
            ref={videoRef}
            resizeMode={ResizeMode.COVER}
            onReadyForDisplay={e => {
              setVideoHeight(e.naturalSize.height);
              setVideoWidth(e.naturalSize.width);
            }}
            onPlaybackStatusUpdate={handleOnPlayBackStatusChanged}
          />
          {isPlaying ? null : (
            <Pressable
              onPress={handleVideoTap}
              style={{position: 'absolute', top: '40%', left: width / 2.5}}>
              <Image
                source={icons.playIcon}
                style={{width: s(56), height: s(56)}}
              />
            </Pressable>
          )}
        </View>
      </View>
      <FeedActionButtons
        isLiked={isLiked}
        isBookMarked={isBookMarked}
        onLike={() => setIsLiked(!isLiked)}
        onBookMark={() => setIsBookMarked(!isBookMarked)}
      />
    </View>
  );
}
