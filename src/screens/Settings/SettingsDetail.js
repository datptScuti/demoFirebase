import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomHeader from '../../navigators/CustomHeader';
import React from 'react';
import i18n from 'locales';

const SettingsDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader title={i18n.t('SettingsDetail')} navigation={navigation} />
      <View style={styles.viewContent}>
        <Text style={styles.textContent}>Settings Detail!</Text>
        <TouchableOpacity
          style={styles.viewTouch}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>Back to Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContent: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
export default SettingsDetail;
