import { View, Text,StyleSheet } from 'react-native'
import React from 'react';
import {COLORS, FONTS, SIZES, DATA} from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from './Button';


const NFTInfo = ({comments, views, price, love}) => {
  return (
    <View style={styles.container}>

     <View  style={styles.wrapper}>
        <AntDesign name="eyeo" size={20} color="white" />
        <Text style={styles.text}>{views}</Text>
     </View>
     <View  style={styles.wrapper}>
     <FontAwesome name="comment" size={20} color="white" />
        <Text style={styles.text}>{comments}</Text>
     </View>
     <View  style={styles.wrapper}>
     <FontAwesome5 name="ethereum" size={20} color="white" />
        <Text style={styles.text}>{price}</Text>
     </View>
     {love && (
         <View>
            <Button icon={<AntDesign name="heart" size={24} color={COLORS.secound} />}
            styleButton={styles.buttonHeart}
            />
         </View>

     )}
    </View>
  )
}

export default NFTInfo;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.secound,
      width: 80,
      borderRadius:40,
      paddingVertical: 3,
      gap: 4,
    },
    text: {
      fontFamily: FONTS.medium,
      fontSize: SIZES.medium,
      color: COLORS.white,
    },
    buttonHeart: {
      backgroundColor: COLORS.bg,
      padding: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: COLORS.secound,
    },
  });