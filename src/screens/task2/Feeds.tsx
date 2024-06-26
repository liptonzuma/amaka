import {FlatList, Pressable, StatusBar, View} from 'react-native';
import React from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import {customColors} from '../../shared/colors';
import BadgedContent from './BadgedContent';
import VideoContentFeed from './VideoContentFeed';
import Separator from '../../components/Separator';
import EventFeed from './EventFeed';
import CreatorSuggestion from './CreatorSuggestion';
import Row from '../../components/Row';
import Typography from '../../components/Typography';
import InterestTabsHeader from './InterestTabsHeader';
import PoolContentFeed from './PoolContentFeed';
import BannerFeed from './BannerFeed';
import {mockFeedData} from '../../utils/feed_data';
import Short from './Short';

export type FeedContentType =
  | 'pool'
  | 'video'
  | 'badged'
  | 'suggestions'
  | 'shorts'
  | 'event'
  | 'banner';

const renderItem = ({
  contentType,
  data,
}: {
  contentType: FeedContentType;
  data: any;
}) => {
  switch (contentType) {
    case 'badged':
      return <BadgedContent hasImage />;
    case 'event':
      return <EventFeed />;
    case 'pool':
      return <PoolContentFeed choices={data.choices} title={data.title} />;
    case 'shorts':
      return (
        <View>
          <Row
            style={{
              justifyContent: 'space-between',
              marginBottom: s(16),
              paddingHorizontal: s(16),
            }}>
            <Typography color={customColors.amaka_gray}>Shorts</Typography>
            <Pressable>
              <Typography color={customColors.amaka_blue} fontWeight="500">
                See All
              </Typography>
            </Pressable>
          </Row>
          <FlatList
            data={data}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item}) => <Short thumbnail={item.img} />}
            contentContainerStyle={{gap: s(10), paddingHorizontal: s(16)}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    case 'suggestions':
      return (
        <View>
          <Row
            style={{
              justifyContent: 'space-between',
              marginBottom: s(16),
              paddingHorizontal: s(16),
            }}>
            <Typography>Suggested for you</Typography>
            <Pressable>
              <Typography color={customColors.amaka_blue} fontWeight="500">
                See All
              </Typography>
            </Pressable>
          </Row>
          <FlatList
            data={data}
            horizontal
            renderItem={() => <CreatorSuggestion />}
            contentContainerStyle={{gap: s(10), paddingHorizontal: s(16)}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    case 'video':
      return <VideoContentFeed />;
    case 'banner':
      return <BannerFeed />;
    default:
      return null;
  }
};

export default function Feeds() {
  return (
    <View style={[styles.container, {paddingTop: 0}]}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <InterestTabsHeader />
      <FlatList
        data={mockFeedData}
        style={{flex: 1, height: '100%'}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          renderItem({contentType: item.contentType, data: item.data})
        }
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{paddingBottom: s(40)}}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.amaka_white,
    gap: '18@s',
  },
});
