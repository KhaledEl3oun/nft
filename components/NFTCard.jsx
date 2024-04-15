import { View, Text, SafeAreaView, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES, DATA} from '../constants';
import NFTImage from './NFTImage';
import NFTAvatar from './NFTAvatar';
import NFTTitle from './NFTTitle';
import NFTInfo from './NFTInfo';
import { useNavigation } from '@react-navigation/native';


const NFTCard = ({NFTData}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate('Details',{NFTData})
  }
  return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity onPress={pressHandler}>
       <NFTImage image={NFTData.image} imageStyle={styles.imageStyles}/>
     </TouchableOpacity>

        <View style={styles.cardTop}>
       <NFTAvatar avatars={NFTData.avatars}/>
        </View>
        <View style={styles.cardBottom}>
         <NFTTitle 
         _name={NFTData.name}
         creator={NFTData.creator}
         date={NFTData.date}
         />
        </View>
        <View style={{marginTop:SIZES.small +5}}>
            <NFTInfo
            comments={NFTData.comments}
            views={NFTData.views}
            price={NFTData.price}
            love
            />
        </View>
    </SafeAreaView>
  )
}

export default NFTCard;

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.cardBg,
      borderRadius: SIZES.medium,
      marginBottom: SIZES.Xlarge,
      marginVertical: SIZES.small - 5,
      marginHorizontal: 14,
      padding: 12,
    },
    cardTop: {
      width: "100%",
      paddingHorizontal: SIZES.medium,
      marginTop: -30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cardBottom: { width: "100%", padding: SIZES.medium },
    imageStyles: {
      width: "100%",
      height: 300,
      borderRadius: 30,
    },
  });