import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import avatar01 from "../assets/image/avatar/avatar01.jpg";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HomeHeader = ({searchHandler}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
<View>
    
        <Image source={avatar01}
        resizeMode='cover'
        style={{width:44, height:44, borderRadius:40}}/>
</View>
<View>
     <View style={{flexDirection:'row',alignItems:'center', gap:5}}>
        <Text style={styles.userText}>khaled said</Text>
        <MaterialCommunityIcons name="check-decagram" size={20} color="white"/>
     </View>
     <View>
        <Text style={{color:COLORS.white}}>creator</Text>
     </View>
     </View>

     </View>
     <View style={{marginTop:SIZES.small,paddingHorizontal:10}}>
        <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="white" />
        <TextInput placeholder='Search by NFT name'
        placeholderTextColor={COLORS.white}
        style={{flex:1,color:COLORS.white}}
        onChangeText={searchHandler}/>
        </View>
     </View>
    </View>
  )
}

export default HomeHeader;
const styles = StyleSheet.create({
    container: {
      padding: SIZES.small,
    },
  
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      paddingHorizontal: 10,
    },
    userText: {
      color: COLORS.white,
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.Xlarge,
    },
    searchContainer: {
      width: "100%",
      borderRadius: SIZES.small,
      backgroundColor: COLORS.cardBg,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginVertical: 30,
      gap:4
    },
  });