import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import {icons} from '../../../assets/icons/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CommonScreenNavigationProps} from '../Welcome';
import VideoPlayer from './VideoPlayer';
import {customColors} from '../../shared/colors';
import {mocked_videos} from '../../utils/videos';
import {useRecoilState} from 'recoil';
import {active_video} from '../../recoil/video_player.recoil';

const {width, height} = Dimensions.get('screen');

export default function TaskOne({navigation}: CommonScreenNavigationProps) {
  const offset = useSafeAreaInsets();

  const goBack = () => navigation.goBack();

  const [activeVideo, setActiveVideo] = useRecoilState(active_video);

  useLayoutEffect(() => {
    setActiveVideo(mocked_videos[0].id);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={{
          position: 'absolute',
          top: s(offset.top + 16),
          zIndex: 20,
          left: s(16),
        }}>
        <Image source={icons.backIcon} style={{width: s(24), height: s(24)}} />
      </TouchableOpacity>

      <FlatList
        data={mocked_videos}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={e => {
          const currentItem = e.viewableItems[0];
          setActiveVideo(currentItem.item.id || '');
        }}
        renderItem={({item, index}) => (
          <VideoPlayer data={item} key={item.id} />
        )}
        style={{
          position: 'absolute',
          width: width,
          height: height,
          zIndex: 10,
        }}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.amaka_black,
    paddingTop: '60@s',
  },
});
