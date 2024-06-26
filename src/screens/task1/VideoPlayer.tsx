import {Dimensions, Image, Platform, Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Typography from '../../components/Typography';
import {ScaledSheet, s} from 'react-native-size-matters';
import {customColors} from '../../shared/colors';
import {AVPlaybackStatus, ResizeMode, Video} from 'expo-av';
import Row from '../../components/Row';
import Avatar from '../../components/Avatar';
import {icons} from '../../../assets/icons/icons';
import Button from '../../components/Button';
import ButtonsActionGroup from '../../components/ButtonsActionGroup';
import {useRecoilValue} from 'recoil';
import {active_video} from '../../recoil/video_player.recoil';

const {width, height} = Dimensions.get('screen');

interface VideoData {
  id: string;
  videoUrl: string;
  description: string;
  avatar: string;
  creator: string;
  isVerified: boolean;
}

export default function VideoPlayer({data}: {data: VideoData}) {
  const video = React.useRef<Video>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = useRecoilValue(active_video);
  async function handleVideoTap() {
    console.log('tapped');
    try {
      if (video.current) {
        if (!isPlaying) {
          await video.current?.playAsync();
          console.log('playing');
          return;
        }
        await video.current?.pauseAsync();
        console.log('not playing');
      }
    } catch (error) {
      console.log('something went wrong>>>', error);
    }
  }

  async function handleOnPlayBackStatusChanged(status: any) {
    // console.log(status);
    setIsPlaying(status.isPlaying);
  }

  return (
    <>
      <Pressable onPress={handleVideoTap}>
        <Video
          ref={video}
          style={[styles.video]}
          source={{
            uri: data.videoUrl,
          }}
          resizeMode={ResizeMode.COVER}
          isLooping
          useNativeControls={false}
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) =>
            handleOnPlayBackStatusChanged(status)
          }
          shouldPlay={activeVideo === data.id}
          onLoadStart={() => console.log(Platform.OS, '>>>Loading')}
          onReadyForDisplay={() => console.log(Platform.OS, 'done loading')}
        />
      </Pressable>

      <View style={[styles.content]}>
        <Row style={styles.subContent}>
          <View>
            <Row style={styles.title}>
              <Avatar />
              <Row style={{maxWidth: '42%'}}>
                <Typography
                  fontSize={12}
                  color={customColors.amaka_white}
                  fontWeight="500"
                  numberOfLines={1}>
                  {data.creator}
                </Typography>
                {data.isVerified && (
                  <Image
                    source={icons.verifiedBadgeIcon}
                    resizeMode="contain"
                    style={styles.badge}
                  />
                )}
              </Row>
              <View style={styles.buttonWrapper}>
                <Button
                  title="Subscribe"
                  onPress={() => {}}
                  containerStyle={{height: s(32), borderRadius: s(5)}}
                />
              </View>
            </Row>

            <View style={styles.description}>
              <Typography color={customColors.amaka_white}>
                {data.description}
              </Typography>
            </View>
          </View>
          <ButtonsActionGroup />
        </Row>
      </View>
    </>
  );
}

const styles = ScaledSheet.create({
  description: {
    marginTop: '10@s',
  },
  actionIcon: {
    width: '32@s',
    height: '32@s',
    marginBottom: '4@s',
  },
  title: {
    gap: '10@s',
    width: '100%',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    width: '90@s',
    marginLeft: '6@s',
  },
  badge: {
    width: '16@s',
    height: '16@s',
    marginLeft: '4@s',
  },
  subContent: {
    justifyContent: 'space-between',
    width: '93%',
    alignItems: 'flex-end',
  },
  content: {
    position: 'absolute',
    zIndex: 10,
    bottom: '50@s',
    paddingHorizontal: '10@s',
  },
  video: {
    height,
    width,
  },
});
