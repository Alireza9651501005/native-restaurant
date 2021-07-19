import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {addtocart, removefromcart} from './../../redux/action';
import COLORS from '../../consts/colors';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartCard = ({item}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const state2 = state;
    const item2 = state2.find((e) => e.id === item.id);
    return (
      <View style={style.cartCard}>
        <Image source={{uri: item.image}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {item2 ? item2.count : 0}
          </Text>
          <View style={style.actionBtn}>
            <TouchableOpacity onPress={() => dispatch(removefromcart(item))}>
              <Icon name="remove" size={25} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(addtocart(item))}>
              <Icon name="add" size={25} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

export default  CartCard
  
const style = StyleSheet.create({
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
})
