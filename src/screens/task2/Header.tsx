import {Alert, Image, Pressable, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../components/Typography';
import {customColors} from '../../shared/colors';
import {s} from 'react-native-size-matters';
import Row from '../../components/Row';
import {icons} from '../../../assets/icons/icons';

export default function Header() {
  const offset = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: offset.top,
        backgroundColor: customColors.amaka_white,
        justifyContent: 'center',
        paddingHorizontal: s(16),
        paddingBottom: s(16),
      }}>
      <Row style={{justifyContent: 'space-between'}}>
        <Pressable
          onPress={() =>
            Alert.alert('Oops', 'Drawer feature is coming soon...')
          }>
          <Image
            source={icons.drawerIcon}
            style={{width: s(24), height: s(24)}}
          />
        </Pressable>

        <Pressable style={{position: 'relative'}}>
          <Image
            source={icons.notification}
            style={{width: s(24), height: s(24)}}
          />
          <View
            style={{
              backgroundColor: customColors.amaka_blue,
              borderRadius: s(20),
              position: 'absolute',
              right: -4,
              paddingHorizontal: s(4),
              paddingVertical: 2,
              top: -7,
            }}>
            <Typography centered fontSize={9} color={customColors.amaka_white}>
              100
            </Typography>
          </View>
        </Pressable>
      </Row>
    </View>
  );
}
