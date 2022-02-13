import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceStatus} from '../../../components/service/detail/serviceHistoryComponent';
import {
  ManagerComment,
  CustomerProfile,
} from '../../../components/service/detail/serviceInfo';
import {ServiceInfo} from '../../../components/service/detail/serviceInfo';
import ServiceBlock from '../../../components/service/serviceBlock';
import {ServiceDetailProgress} from '../../../components/service/detail/serviceDetail';
import MapView from '../../../components/service/detail/MapView';
import {btnStyles} from '../../../components/common/button';
import CustomBtn from '../../../components/common/button';
import {ServiceTimePicker} from '../../../components/service/detail/servicePicker';

const ServiceDetail = ({navigation}) => {
  const styles = StyleSheet.create({
    block1: {
      width: '100%',
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: '#fff',
    },
    title: {marginBottom: 12},
    mapContainer: {
      width: '100%',
      height: 260,
      backgroundColor: '#fff',
      paddingBottom: 16,
    },
    map: {
      width: '90%',
      height: 244,
      alignSelf: 'center',
    },
    documentBtn: {
      width: '100%',
      height: 30,
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
            서비스 상세보기
          </Text>
          <ServiceStatus text={'현재 운행 중'} />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
            style={styles.map}
            lat={37.566481622437934}
            lng={126.98502302169841}
          />
        </View>

        <ServiceBlock>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fw700,
              typoStyles.textExplainBold,
              styles.title,
            ]}>
            필수 서류가 제출되지 않았습니다.
          </Text>
          <CustomBtn
            viewStyle={[btnStyles.btnPrimary, styles.documentBtn]}
            textStyle={[
              typoStyles.fs14,
              typoStyles.fw700,
              typoStyles.textWhite,
            ]}
            text={'필수 서류 제출'}
            onPress={() => navigation.push('RequiredDocument')}
          />
        </ServiceBlock>

        <CustomerProfile
          name={'홍길동'}
          addr={'성북구 길음동 11-30'}
          type={2}
        />
        <ServiceDetailProgress />
        <ServiceBlock>
          <ServiceTimePicker />
        </ServiceBlock>
        <ManagerComment comment={'문 앞에 도착하면 연락드리겠습니다!'} />
        <ServiceBlock>
          <ServiceInfo />
        </ServiceBlock>
      </ScrollView>
    </CommonLayout>
  );
};

export default ServiceDetail;
