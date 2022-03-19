import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../../components/common/layout';
import RestBlock from '../../components/home/restBlock';
import GetTodayReserveList from '../../api/home/getTodayReserveList';
import {NoticeBlock} from '../../components/home/noticeBlock';

const Home = () => {
  const styles = StyleSheet.create({
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

  const [res, setRes] = useState([]);

  const test = async () => {
    setRes(await GetTodayReserveList());
  };

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    console.log('res?', res);
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
      <ScrollView>
        <NoticeBlock data={res} />
        <RestBlock />
        <View style={styles.howTo}>
          <Text style={styles.tempTxt}>이용안내 이미지</Text>
        </View>
      </ScrollView>
    </CommonLayout>
  );
};
export default Home;
