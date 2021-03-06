import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import CommonLayout from '../../../components/common/layout';
import {ServiceStatus} from '../../../components/service/detail/serviceHistoryComponent';
import {CustomerProfile} from '../../../components/service/detail/serviceInfo';
import {ServiceInfo} from '../../../components/service/detail/serviceInfo';
import ServiceBlock from '../../../components/service/serviceBlock';
import {ServiceDetailProgress} from '../../../components/service/detail/serviceDetail';
import MapView from '../../../components/service/detail/MapView';
import CustomBtn, {btnStyles} from '../../../components/common/button';
import {ServiceTimePicker} from '../../../components/service/detail/servicePicker';
import RecodeTimeAPI from '../../../api/service/recodeTime';
import GetServiceDetail from '../../../api/service/getServiceDetail';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

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
  const [reload, setReload] = useState(false);

  const onReload = useCallback(() => {
    setReload(true);
    wait(2000).then(() => setReload(false));
  }, []);

  const GetDetailInfos = async () => {
    setDetail(await GetServiceDetail(detailId));
  };

  useEffect(() => {
    GetDetailInfos();
  }, [detailId]);

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

  return (
    <CommonLayout>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={reload} onRefresh={onReload} />
        }>
        <View style={styles.block1}>
          <Text
            style={[
              typoStyles.fs32,
              typoStyles.textMain,
              typoStyles.fw700,
              styles.title,
            ]}>
            ????????? ????????????
          </Text>
          <ServiceStatus text={detail?.service?.reservation_state} />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            appKey="l7xx9d4d587fe7104a57b8feda886c846d1f"
            style={styles.map}
            lat={37.566481622437934}
            lng={126.98502302169841}
          />
        </View>
        {detail?.document_isSubmit ? (
          <></>
        ) : (
          <ServiceBlock>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textExplainBold,
                styles.title,
              ]}>
              ?????? ????????? ???????????? ???????????????.
            </Text>
            <CustomBtn
              viewStyle={[btnStyles.btnPrimary, styles.documentBtn]}
              textStyle={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textWhite,
              ]}
              text={'?????? ?????? ??????'}
              onPress={() =>
                navigation.push('RequiredDocument', {detailId: detailId})
              }
            />
          </ServiceBlock>
        )}
        <CustomerProfile
          name={detail?.service?.user_name}
          addr={
            detail?.service?.dispatch_case == 2
              ? detail?.service?.hos_address
              : detail?.service?.pickup_address
          }
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
              ????????? ????????? ??????????????????.
            </Text>
            <ServiceTimePicker setTime={setPickTime} />
            <CustomBtn
              viewStyle={[btnStyles.btnBlue, styles.setTimeBtn]}
              textStyle={[
                typoStyles.fs14,
                typoStyles.fw700,
                typoStyles.textWhite,
              ]}
              text={'???????????? ??? ???????????? ????????????'}
              onPress={async () => {
                const res = await RecodeTimeAPI(data);
                if (res.status === 200) {
                  console.log('??????');
                } else {
                  console.log('??????');
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
              *????????? ?????? ?????? ????????? ?????? ??????????????? ??????????????????.
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
