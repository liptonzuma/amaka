import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet, s} from 'react-native-size-matters';
import Avatar from '../../components/Avatar';
import Typography from '../../components/Typography';
import {customColors} from '../../shared/colors';
import Button from '../../components/Button';
import {AntDesign} from '@expo/vector-icons';

export default function CreatorSuggestion() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close}>
        <AntDesign name="close" color={customColors.amaka_gray} size={14} />
      </TouchableOpacity>
      <Avatar size={64} />
      <Typography fontWeight="500">Mide Olabanji</Typography>
      <Typography fontSize={12} color={customColors.amaka_gray}>
        @mideolabanji
      </Typography>
      <Typography fontSize={12} color={customColors.amaka_gray}>
        19.7K Subscribers
      </Typography>

      <Button
        title="Subscribe"
        onPress={() => {}}
        containerStyle={{height: s(32), borderRadius: s(5), marginTop: s(10)}}
        textStyle={{fontWeight: '500'}}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  close: {
    width: '24@s',
    height: '24@s',
    position: 'absolute',
    right: '4@s',
    top: '4@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderWidth: '1@s',
    borderColor: 'rgba(229, 228, 229, 1)',
    maxHeight: '208@s',
    height: '208@s',
    width: '144@s',
    borderRadius: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8@s',
    paddingHorizontal: '10@s',
  },
});
