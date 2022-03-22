import React, {useEffect, useReducer, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';
import {ServiceTimePicker} from './servicePicker';
import GetServiceProgress from '../../../api/service/getServiceProgress';

const DetailProgressCircle = ({time, text, circleFill}) => {
  const styles = StyleSheet.create({
    oneStep: {
      width: '50%',
      alignItems: 'center',
    },
    bigCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#fff',
      zIndex: 4,
    },
    smallCircleNoActive: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#dad8e0',
      zIndex: 5,
    },
    smallCircleActive: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#19b7cd',
      zIndex: 5,
    },
    text: {
      marginVertical: 8,
    },
  });

  return (
    <View style={styles.oneStep}>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {time}
      </Text>
      <View style={styles.bigCircle}>
        {circleFill ? (
          <View style={styles.smallCircleActive} />
        ) : (
          <View style={styles.smallCircleNoActive} />
        )}
      </View>
      <Text
        style={[
          typoStyles.fs13,
          typoStyles.fw700,
          typoStyles.textExplain,
          styles.text,
        ]}>
        {text}
      </Text>
    </View>
  );
};

export const ServiceDetailProgress = ({state, time}) => {
  console.log('time in progress', time);
  const GetLineFill = () => {
    let lineFill1 = '0%';
    let lineFill2 = '0%';
    switch (state) {
      case 1:
        lineFill1 = '0%';
        lineFill2 = '0%';
        break;
      case 2:
        lineFill1 = '50%';
        lineFill2 = '0%';
        break;
      case 3:
      case 4:
        lineFill1 = '100%';
        lineFill2 = '0%';
        break;
      case 5:
        lineFill1 = '100%';
        lineFill2 = '50%';
        break;
      case 6:
        lineFill1 = '100%';
        lineFill2 = '100%';
        break;
    }
    const lineFill = {lineFill1: lineFill1, lineFill2: lineFill2};
    return lineFill;
  };

  const styles = StyleSheet.create({
    title: {marginBottom: 12},
    steps: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 0,
    },
    lineGray1: {
      position: 'absolute',
      bottom: '42%',
      width: '100%',
      height: 13,
      backgroundColor: '#dad8e0',
      zIndex: 2,
    },
    lineGray2: {
      position: 'absolute',
      bottom: '52%',
      width: '100%',
      height: 13,
      backgroundColor: '#dad8e0',
      zIndex: 2,
    },
    lineBlue1: {
      position: 'absolute',
      width: GetLineFill().lineFill1,
      height: 13,
      backgroundColor: '#19b7cd',
      zIndex: 3,
    },
    lineBlue2: {
      position: 'absolute',
      width: GetLineFill().lineFill2,
      height: 13,
      backgroundColor: '#19b7cd',
      zIndex: 3,
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
        진행 상황
      </Text>
      <View style={styles.steps}>
        <View style={styles.lineGray1}>
          <View style={styles.lineBlue1} />
        </View>
        <DetailProgressCircle
          time={time?.[1]?.substring(11, 16)}
          text={'차량 출발'}
          circleFill={state > 0}
        />
        <DetailProgressCircle
          time={time?.[2]?.substring(11, 16)}
          text={'픽업 완료'}
          circleFill={state > 1}
        />
        <DetailProgressCircle
          time={time?.[3]?.substring(11, 16)}
          text={'병원 도착'}
          circleFill={state > 2}
        />
      </View>

      <View style={styles.steps}>
        <View style={styles.lineGray2}>
          <View style={styles.lineBlue2} />
        </View>
        <DetailProgressCircle
          time={time?.[4]?.substring(11, 16)}
          text={'귀가차량\n병원도착'}
          circleFill={state > 3}
        />
        <DetailProgressCircle
          time={time?.[5]?.substring(11, 16)}
          text={'귀가 출발'}
          circleFill={state > 4}
        />
        <DetailProgressCircle
          time={time?.[6]?.substring(11, 16)}
          text={'서비스 종료'}
          circleFill={state > 5}
        />
      </View>
    </ServiceBlock>
  );
};
