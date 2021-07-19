import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {checkout} from './../../redux/action';
import CartCard from '../components/CartCard';
import {useDeviceOrientation} from '@react-native-community/hooks';

const CartScreen = ({navigation}) => {
  const {portrait} = useDeviceOrientation();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let sum = 0;
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      {!state.length ? (
        <View style={style.empty}>
          <Text style={[style.textt, {marginVertical: portrait ? 200 : 50}]}>
            سبد خرید شما خالی است
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={state}
          renderItem={({item}) => {
            sum += item.count * item.price;
            return <CartCard item={item} />;
          }}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  کل مبلغ پرداختی
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {sum.toFixed(2)}
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <PrimaryButton
                  title="حذف همه"
                  onPress={() => dispatch(checkout())}
                />
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textt: {
    fontSize: 35,
    fontWeight: 'bold',
    // marginVertical: 150,
    color: 'red',
  },
});

export default CartScreen;
