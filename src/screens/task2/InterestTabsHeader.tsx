import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {AntDesign} from '@expo/vector-icons';
import {customColors} from '../../shared/colors';
import Row from '../../components/Row';
import Typography from '../../components/Typography';

const userInterestTabs = [
  {
    name: 'For you',
    id: '#fyp',
  },
  {
    name: 'Following',
    id: '#fwn',
  },
  {
    name: 'Trending',
    id: '#trdn',
  },
  {
    name: 'Design',
    id: '#dsgn',
  },
  {
    name: 'Nigeria',
    id: '#ngn',
  },
  {
    name: 'Movies',
    id: '#mvs',
  },
];

export default function InterestTabsHeader() {
  const [activeTab, setActiveTab] = useState('#fyp');

  const selectTab = (id: string) => setActiveTab(id);
  return (
    <View>
      <Row style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
          <AntDesign name="plus" color={customColors.amaka_gray} size={20} />
        </TouchableOpacity>
        <FlatList
          horizontal
          keyExtractor={item => item.id}
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
          data={userInterestTabs}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => selectTab(item.id)}>
              <Typography
                color={
                  activeTab === item.id
                    ? customColors.amaka_black
                    : customColors.amaka_gray
                }
                fontWeight={activeTab === item.id ? '500' : '400'}>
                {item.name}
              </Typography>
              {activeTab === item.id && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          )}
        />
      </Row>
      <View style={styles.line} />
    </View>
  );
}

const styles = ScaledSheet.create({
  activeIndicator: {
    backgroundColor: customColors.amaka_black,
    width: '100%',
    height: '1.5@s',
    marginTop: '10@s',
  },
  line: {
    width: '100%',
    height: '1@s',
    backgroundColor: 'rgba(229, 228, 229, 1)',
    marginTop: -0.3,
  },
  content: {
    gap: '16@s',
    paddingRight: '16@s',
  },

  container: {
    paddingLeft: '16@s',
    gap: '16@s',
    alignItems: 'flex-start',
  },
});
