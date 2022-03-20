import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../../components/common/layout';
import RestBlock from '../../components/home/restBlock';

const Home = ({navigation}) => {
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

  const GetHomeList = async () => {
    setRes(await GetTodayReserveList());
  };

  useEffect(() => {
    GetHomeList();
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
        <NoticeBlock data={res} navi={navigation} />
        <RestBlock />
      </ScrollView>
    </CommonLayout>
  );
};
export default Home;
