import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles} from '../../../components/common/button';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceHistoryBlock} from '../../../components/service/detail/serviceHistoryComponent';
import ServiceSearch from '../../../components/service/detail/serviceSearch';

const ServiceHistory = ({navigation}) => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 12},
    selectSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    selectBtn: {
      width: '48%',
      alignItems: 'center',
    },
    selectBar: {
      width: '100%',
      height: 8,
      borderRadius: 30,
      marginTop: 5,
    },
    active: {backgroundColor: '#19B7CD'},
    nonActive: {
      backgroundColor: '#DAD8E0',
    },
    searchBtn: {
      width: '100%',
      height: 30,
      marginTop: 20,
    },
  });
  return (
    <CommonLayout>
      <ScrollView>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.textMain,
              typoStyles.fw700,
              styles.title,
            ]}>
            서비스 내역
          </Text>

          <View style={styles.selectSection}>
            <TouchableOpacity style={styles.selectBtn}>
              <Text
                style={[
                  typoStyles.fs13,
                  typoStyles.fw700,
                  typoStyles.textMain,
                ]}>
                진행 내역
              </Text>
              <View style={[styles.selectBar, styles.active]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBtn}>
              <Text
                style={[
                  typoStyles.fs13,
                  typoStyles.fw700,
                  typoStyles.textDisable,
                ]}>
                완료 내역
              </Text>
              <View style={[styles.selectBar, styles.nonActive]} />
            </TouchableOpacity>
          </View>

          <ServiceSearch />
          <TouchableOpacity style={[btnStyles.btnBlue, styles.searchBtn]}>
            <Text
              style={[typoStyles.fw900, typoStyles.textWhite, typoStyles.fs14]}>
              검색
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ServiceHistoryBlock
            date={'2021.10.20'}
            type={'네츠 휠체어 플러스'}
            goNext={navigation}
            goNext={() => navigation.navigate('ServiceDetail')}
          />
          <ServiceHistoryBlock
            date={'2021.10.22'}
            type={'네츠 휠체어 플러스'}
            goNext={() => navigation.navigate('ServiceDetail')}
          />
        </View>
      </ScrollView>
    </CommonLayout>
  );
};
export default ServiceHistory;
