import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import Button from "../components/Button";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import {COLORS, FONTS, SIZES, DATA} from '../constants';

const NFTImage = ({image, imageStyle, love, arrow, pressHandler}) => {
  return (
    <View style={styles.container}>
     <Image source={image} style={imageStyle}/>
     {love && <Button styleButton={styles.buttonHeart}
     icon={<AntDesign name="heart" size={24} color={COLORS.secound} />}/>}

     {arrow && <Button styleButton={styles.buttonArrow}
     icon={<AntDesign name="arrowleft" size={24} color={COLORS.secound}/>}
     PressHAndler={pressHandler && pressHandler}/>}
    </View>
  )
}

export default NFTImage;

const styles = StyleSheet.create({
    container:{
       width:"100%",
       position:"relative"
    },
    buttonHeart: {
      position: "absolute",
      top: StatusBar.currentHeight + 10,
      right: 10,
      backgroundColor: COLORS.white,
      padding: 10,
      borderRadius: 40,
    },
    buttonArrow: {
      position: "absolute",
      top: StatusBar.currentHeight + 10,
      left: 10,
      backgroundColor: COLORS.white,
      padding: 10,
      borderRadius: 40,
    },
})