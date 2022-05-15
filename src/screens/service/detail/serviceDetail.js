import React, {useEffect, useState} from 'react';
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
import CustomBtn, {btnStyles} from '../../../components/common/button';
import {ServiceTimePicker} from '../../../components/service/detail/servicePicker';
import RecodeTimeAPI from '../../../api/service/recodeTime';
import GetServiceDetail from '../../../api/service/getServiceDetail';

const ServiceDetail = ({navigation, route}) => {
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
    setTimeBtn: {
      width: '100%',
      height: 30,
      marginTop: 15,
    },
  });
  const {detailId} = route.params;
  const [detail, setDetail] = useState();
  const [pro, setPro] = useState();
  // useEffect(() => {
  //   GetServiceProgresses();
  // }, []);

  // useEffect(() => {
  //   if (pro.service_state > 4) {
  //   }
  // }, [pro]);

  console.log(detailId);

  const GetDetailInfos = async () => {
    setDetail(await GetServiceDetail(detailId));
  };

  useEffect(() => {
    GetDetailInfos();
  }, [detailId]);

  useEffect(() => {
    console.log('detail?나는', detail);
  }, [detail]);

  const [pickTime, setPickTime] = useState('');
  const [data, setData] = useState({
    service_id: detailId,
    recodeTime: {
      hours: 0,
      minutes: 0,
    },
  });

  useEffect(() => {
    setData({
      ...data,
      recodeTime: {
        ...data.recodeTime,
        hours: parseInt(pickTime.substring(0, 2)),
        minutes: parseInt(pickTime.substring(3, 5)),
      },
    });
  }, [pickTime]);

  useEffect(() => {
    console.log('data================', data);
  }, [data]);

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
            onPress={() => navigation.push('RequiredDocument', {detailId})}
          />
        </ServiceBlock>
        <CustomerProfile
          name={detail?.service?.user_name}
          addr={detail?.service?.pickup_address}
          tel={detail?.service?.user_phone}
          type={2}
        />
        <ServiceDetailProgress
          state={detail?.service_state}
          state_time={detail?.service_state_time}
          dispatchCase={detail?.service?.dispatch_case}
        />

        {detail?.service_state != 6 && (
          <ServiceBlock>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textExplain,
                {marginBottom: 15},
              ]}>
              완료한 시간을 설정해주세요.
            </Text>
            <ServiceTimePicker setTime={setPickTime} />
            <CustomBtn
              viewStyle={[btnStyles.btnBlue, styles.setTimeBtn]}
              textStyle={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textWhite,
              ]}
              text={'클릭해서 이 시간으로 저장하기'}
              onPress={async () => {
                const res = await RecodeTimeAPI(data);
                if (res.status === 200) {
                  console.log('성공');
                } else {
                  console.log('실패');
                }
                GetDetailInfos();
              }}
            />

            <Text
              style={[
                typoStyles.fs12,
                typoStyles.fwRegular,
                typoStyles.textPrimary,
                {marginTop: 5, alignSelf: 'center'},
              ]}>
              *시간이 잘못 입력 되었을 경우 관리자에게 문의해주세요.
            </Text>
          </ServiceBlock>
        )}
        <ServiceBlock>
          <ServiceInfo num={2} data={detail?.service} />
        </ServiceBlock>
      </ScrollView>
    </CommonLayout>
  );
};

export default ServiceDetail;
