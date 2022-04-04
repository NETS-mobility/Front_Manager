import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Button} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import {btnStyles} from '../../components/common/button';
import CommonLayout from '../../components/common/layout';
import RestBlock from '../../components/home/restBlock';
import GetTodayReserveList from '../../api/home/getTodayReserveList';
import {NoticeBlock} from '../../components/home/noticeBlock';
import Alarm_test from '../../api/alarm_test';
import CustomBtn from '../../components/common/button';
import {LocalNotification} from '../../components/pushNoti/localPush';
import RemotePushController from '../../components/pushNoti/remotePush';

const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    block: {
      flex: 1,
    },
    img: {
      position: 'relative',
      width: '100%',
      height: 200,
    },
    imgBox: {
      position: 'absolute',
      top: 57,
      width: '100%',
      height: 200,
      backgroundColor: '#19B7CD',
      opacity: 0.38,
    },
    title: {
      position: 'absolute',
      top: 115,
      left: 36,
    },
    text: {
      marginBottom: 30,
    },
    btn: {
      width: 328,
      height: 47,
      alignSelf: 'center',
      marginBottom: 40,
    },
    howTo: {
      width: '100%',
      height: 347,
      backgroundColor: '#c4c4c4',
      justifyContent: 'center',
    },
    tempTxt: {
      textAlign: 'center',
    },
  });
  const handleButtonPress = () => {
    LocalNotification();
  };

  const [res, setRes] = useState([]);

  const GetHomeList = async () => {
    setRes(await GetTodayReserveList());
  };

  useEffect(() => {
    GetHomeList();
  }, []);

  useEffect(() => {
    console.log('home res?', res);
  }, [res]);

  return (
    <CommonLayout>
      <Image
        source={require('../../assets/image/startimg.png')}
        style={styles.img}
      />
      <View style={styles.imgBox}></View>
      <Text
        style={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textWhite,
          styles.title,
        ]}>
        {`네츠\n모빌리티`}
      </Text>
      <ScrollView style={styles.block}>
        <CustomBtn
          viewStyle={btnStyles.btnBlue}
          onPress={async () => {
            const newTest = handleButtonPress();
            // const res = await Alarm_test();
            console.log('res', newTest);
          }}
        />
        <NoticeBlock data={res} navi={navigation} />
        <RestBlock />
        <RemotePushController />
      </ScrollView>
    </CommonLayout>
  );
};
export default Home;
