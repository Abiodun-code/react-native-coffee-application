import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import { themeColors } from '../theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

interface Props{
  item: any
}

export default function CoffeeCard({ item }: Props) {

  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation()

  return (
    <View className="w-[250px] h-auto rounded-[40px] mx-4" style={{backgroundColor: themeColors.bgLight}}>
      <View style={{
        shadowColor:"black",
        shadowRadius: 30,
        shadowOffset: {width: 0, height: 40},
        shadowOpacity: 0.8
        }}
        className="flex-row justify-center mt-1"
      >
        <Image source={item.image} className="h-40 w-40"/>
      </View>
      <View className="px-5 mt-3 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16" 
          style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}
        >
          <StarIcon size={15} color="white"/>
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-2">
          <Text className="text-base font-semibold text-white opacity-60">volume</Text>
          <Text className="text-base font-semibold text-white">{item.volume}</Text>
        </View>
        <View className="flex-row justify-between items-center mb-3"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}>
          <Text className="text-white font-bold text-lg">$ {item.price}</Text>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('Product', {...item})}
            className="bg-white p-3 rounded-full" activeOpacity={0.7}>
            <PlusIcon size={20} strokeWidth={2} color={themeColors.bgDark}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}