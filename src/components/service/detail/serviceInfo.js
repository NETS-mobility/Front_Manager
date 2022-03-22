import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {btnStyles} from '../../common/button';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';

export const CustomerProfile = ({name, addr, type, tel}) => {
  const styles = StyleSheet.create({
    infoBlock: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImg: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 11,
    },
    btn: {
      width: '100%',
      height: 30,
      marginTop: 22,
    },
  });
  return (
    <ServiceBlock>
      <View style={styles.infoBlock}>
        <Image
          source={require('../../../assets/image/startimg.png')}
          style={styles.profileImg}
        />
        <View>
          <Text
            style={[
              typoStyles.fs18,
              typoStyles.fw700,
              typoStyles.textExplainBold,
            ]}>
            {name}
          </Text>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwRegular,
              typoStyles.textExplainBold,
            ]}>
            {addr}
          </Text>
        </View>
      </View>
      {type == 2 ? (
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${tel}`)}
          style={[btnStyles.btnBlue, styles.btn]}>
          <Text
            style={[typoStyles.fs14, typoStyles.fw700, typoStyles.textWhite]}>
            전화 걸기
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </ServiceBlock>
  );
};

export const ManagerComment = ({comment}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 22,
    },
  });
  return (
    <ServiceBlock>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fw700,
          typoStyles.textExplainBold,
          styles.title,
        ]}>
        매니저가 전하는 말
      </Text>
      <Text
        style={[
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplainBold,
        ]}>
        {comment}
      </Text>
    </ServiceBlock>
  );
};

const pickCategory = (data, pick) => {
  const categories = {
    1: ['서비스 번호', data?.service_id],
    2: ['픽업 주소', data?.pickup_address],
    3: ['병원 주소', data?.hos_address],
    4: ['귀가 주소', data?.drop_address],
    5: ['픽업 예정 시간', data?.pickup_time.substring(0, 5)],
    6: ['희망 병원 도착 시간', data?.hos_arrival_time.substring(0, 5)],
    7: ['희망 귀가 출발 시간', data?.hos_depart_time.substring(0, 5)],
    8: ['진료/검사 예약 시간', data?.hos_care_time.substring(0, 5)],
    9: ['고객 이름', data?.user_name],
    10: ['고객 전화번호', data?.user_phone],
    11: ['동행 매니저 이름', data?.gowithumanager],
    12: ['동행 매니저 전화번호', data?.gowithumanager_phone],
    // 12: ['동행 매니저 전화번호', '010-2222-1111'],
  };

  const categoryKey = Object.keys(categories);
  for (let i = 0; i < categoryKey.length; i++) {
    if (categoryKey[i] == pick) {
      return categories[categoryKey[i]];
    }
  }
};

const CaseInfo = (dispatchCase) => {
  switch (dispatchCase) {
    case 1: //집-병원
      return [1, 2, 3, 5, 6, 8, 9, 10];
    case 2: //병원-집
      return [1, 3, 4, 7, 9, 10];
    case 3: //집-집 (배차 1번, 2시간 이하)
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    case 4: //왕복2시간이상
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
};

export const ServiceInfo = ({num, data}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });

  const infos = CaseInfo(data?.dispatch_case);

  return (
    <View>
      {num == 1 ? (
        <></>
      ) : (
        <Text
          style={[
            typoStyles.fs14,
            typoStyles.fw700,
            typoStyles.textExplainBold,
            styles.title,
          ]}>
          서비스 정보
        </Text>
      )}

      {infos != undefined &&
        infos?.map((infoData, i) => {
          const result = pickCategory(data, infoData);
          return (
            <ServiceInfoOneLine title={result[0]} value={result[1]} key={i} />
          );
        })}
    </View>
  );
};

const ServiceInfoOneLine = ({title, value}) => {
  const styles = StyleSheet.create({
    line: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    title: {
      width: '50%',
    },
    value: {
      width: '50%',
    },
  });
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.title,
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplain,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.value,
          typoStyles.fs14,
          typoStyles.fwRegular,
          typoStyles.textExplainBold,
        ]}>
        {value}
      </Text>
    </View>
  );
};
