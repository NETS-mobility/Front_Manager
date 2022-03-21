import React, {useEffect, useReducer} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import ServiceBlock from '../serviceBlock';
import {ServiceTimePicker} from './servicePicker';

const DetailProgressCircle = ({time, text}) => {
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
    },
    smallCircle: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#19b7cd',
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
        <View style={styles.smallCircle} />
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

export const ServiceDetailProgress = ({time}) => {
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
    line1: {
      position: 'absolute',
      bottom: '42%',
      width: '100%',
      height: 13,
      backgroundColor: '#19B7CD',
    },
    line2: {
      position: 'absolute',
      bottom: '52%',
      width: '100%',
      height: 13,
      backgroundColor: '#19B7CD',
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
        <View style={styles.line1} />
        <DetailProgressCircle time={time[0]?.time} text={time[0]?.text} />
        <DetailProgressCircle time={time[1]?.time} text={time[1]?.text} />
        <DetailProgressCircle time={time[2]?.time} text={time[2]?.text} />
      </View>

      <View style={styles.steps}>
        <View style={styles.line2} />
        <DetailProgressCircle time={time[3]?.time} text={time[3]?.text} />
        <DetailProgressCircle time={time[4]?.time} text={time[4]?.text} />
        <DetailProgressCircle time={time[5]?.time} text={time[5]?.text} />
      </View>
    </ServiceBlock>
  );
};
