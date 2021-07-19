import React from 'react';
import {Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
import {ScaledSheet} from 'react-native-size-matters';
import {
  useDeviceOrientation,
} from '@react-native-community/hooks';
const OnBoardScreen = ({navigation}) => {
  const {portrait} = useDeviceOrientation();
  return (
    <SafeAreaView style={style.saferia}>
      <View
        style={[
          style.container,
          {height: portrait ? '10%' : '20%'},
        ]}>
        <Image
          style={[style.mig, {width: portrait ? 300 : 280}]}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawHJ2vwp3ftVSplJIxwLNniXxMFeiPohIAw&usqp=CAU',
          }}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text
            style={{
              fontFamily: 'Zocial',
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            غذای خوش مزه
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: portrait ? COLORS.grey : 'green',
            }}>
            به شما کمک میکنیم بهترین و خوش مزه ترین غذا رو پیدا کنید!
          </Text>
        </View>
        <View style={[style.indicatorContainer, {marginTop: portrait ? 0 : 15}]}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="شروع"
        />
      </View>
    </SafeAreaView>
  );
};

const style = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '10@s',
    textAlign:'center'
  },
  saferia: {
    flex: 1, 
    backgroundColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign: 'center'
  },
  textContainer: {
    flex: '1@s',
    paddingHorizontal: '50@s',
    justifyContent: 'space-between',
    paddingBottom: '40@s',
    alignItems: 'center'
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: '12@s',
    width: '30@s',
    borderRadius: '10@s',
    backgroundColor: COLORS.primary,
    marginHorizontal: '5@s',
  },
  indicator: {
    height: '12@s',
    width: '12@s',
    borderRadius: '6@s',
    backgroundColor: COLORS.grey,
    marginHorizontal: '5@s',
  },
  mig: {
    marginBottom:'10@s',
    flex: '1@s',
    width: '350@s',
    height: '200@s',
  },
});

export default OnBoardScreen;
