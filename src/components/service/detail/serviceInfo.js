import React from 'react';
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

export const CustomerProfile = ({name, addr, type}) => {
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
          onPress={() => Linking.openURL(`tel:02-0000-0000`)}
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

export const ServiceInfo = ({num, data}) => {
  const styles = StyleSheet.create({
    title: {
      marginBottom: 17,
    },
  });
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
      <ServiceInfoOneLine title={'서비스 번호'} value={data?.service_id} />
      <ServiceInfoOneLine
        title={'픽업 예정 시간'}
        value={data?.pickup_time.substring(0, 5)}
      />
      <ServiceInfoOneLine title={'픽업 주소'} value={data?.pickup_address} />
      <ServiceInfoOneLine title={'병원 주소'} value={data?.hos_address} />
      <ServiceInfoOneLine
        title={'희망 병원 도착 시간'}
        value={data?.hos_arrival_time.substring(0, 5)}
      />
      <ServiceInfoOneLine
        title={'진료/검사 예약 시간'}
        value={data?.hos_care_time.substring(0, 5)}
      />
      <ServiceInfoOneLine title={'고객 이름'} value={data?.user_name} />
      <ServiceInfoOneLine title={'고객 전화번호'} value={data?.user_name} />
      <ServiceInfoOneLine title={'동행 매니저'} value={data?.gowithumanager} />
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
