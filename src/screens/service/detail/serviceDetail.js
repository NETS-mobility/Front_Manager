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
  const {detailId} = route.params;
  const [detail, setDetail] = useState();

  console.log(detailId);

  const GetDetailInfos = async () => {
    setDetail(await GetServiceDetail(detailId));
  };

  useEffect(() => {
    GetDetailInfos();
  }, [detailId]);

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

  const [pickTime, setPickTime] = useState('');
  const [sendTime, setSendTime] = useState([
    {id: 1, time: '', text: '차량출발'},
    {id: 2, time: '', text: '픽업완료'},
    {id: 3, time: '', text: '병원도착'},
    {id: 4, time: '', text: '귀가차량\n병원도착'},
    {id: 5, time: '', text: '귀가출발'},
    {id: 6, time: '', text: '서비스종료'},
  ]);
  const [data, setData] = useState({
    service_id: detailId,
    recodeTime: {
      hours: 0,
      minutes: 0,
    },
  });
  let i = 1;

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
    console.log('setSendTime=', sendTime);
  }, [sendTime]);

  useEffect(() => {
    console.log('data================', data);
  }, [data]);

  useEffect(() => {
    console.log('send time========', sendTime);
    console.log('sendtime[0]', sendTime[0]?.time);
  }, [sendTime]);

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
        {/* {
  "document_isSubmit": true,
  "service_state": 0,
  "service_state_time": [
    "string"
  ],
  "manager": {
    "name": "string",
    "location": "string",
    "mention": "string"
  },
  "service": {
    "service_type": "string",
    "start_time": "string",
    "end_time": "string",
    "rev_date": "string",
    "pickup_address": "string",
    "hos_address": "string",
    "user_name": "string",
    "reservation_state": 0
  }
} */}

        <CustomerProfile
          name={'홍길동'}
          addr={'성북구 길음동 11-30'}
          type={2}
        />
        <ServiceDetailProgress time={sendTime} />
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
              // setSendTime((sendTime) => [...sendTime.i, {time: pickTime}]);
              setSendTime(
                sendTime.map((it) =>
                  it.id === i ? {...it, time: pickTime} : it,
                ),
              );
              i = i + 1;
              const res = await RecodeTimeAPI(data);
              if (res.status === 200) {
                console.log('성공');
              } else {
                console.log('실패');
              }
            }}
          />
          <Text
            style={[
              typoStyles.fs12,
              typoStyles.fwRegular,
              typoStyles.textPrimary,
              {marginTop: 5, alignSelf: 'center'},
            ]}>
            *시간이 잘 못 입력 되었을 경우 관리자에게 문의해주세요.
          </Text>
        </ServiceBlock>
        <ManagerComment comment={'문 앞에 도착하면 연락드리겠습니다!'} />
        <ServiceBlock>
          <ServiceInfo num={2} />
        </ServiceBlock>
      </ScrollView>
    </CommonLayout>
  );
};

export default ServiceDetail;
