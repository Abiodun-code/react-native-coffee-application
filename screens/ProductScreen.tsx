import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"
import { View, Text, Image, SafeAreaView, StyleSheet, Platform, TouchableOpacity } from "react-native"
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { HeartIcon, MinusIcon, PlusIcon, StarIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 50 : 0
  }
});

const ProductScreen = ()=>{

  const route:RouteProp<ParamListBase> = useRoute()
  const navigation = useNavigation()
  const [size, setSize] = useState("small")
  const item:Readonly<object | undefined> = route.params;

  return(
    <View className="flex-1">
      <StatusBar style={"light"} />
      <Image source={require("../assets/images/beansBackground2.png")}
        className="w-full absolute"
        style={{ 
          height: 300, 
          borderBottomLeftRadius: 50, 
          borderBottomRightRadius: 50 }}/>
          <SafeAreaView className="space-y-4" style={styles.AndroidSafeArea}>
            <View className="mx-4 flex-row justify-between items-center">
              <TouchableOpacity onPress={()=>navigation.goBack("Home")}>
                <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full border-2 border-white p-2">
                <HeartIcon size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Image source={item.image} className="h-60 w-60"/>
            </View>
            <View className="mx-4 flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <StarIcon size={15} color="white" />
              <Text className="text-base font-semibold text-white">{item.stars}</Text>
            </View>
            <View className="mx-4 flex-row justify-between items-center">
              <Text className="text-3xl font-semibold" style={{color: themeColors.text}}>
                {item.name}
              </Text>
              <Text className="text-lg font-semibold" style={{ color: themeColors.text }}>
                $ {item.price}
              </Text>
            </View>
            <View className="mx-4 space-y-2">
              <Text className="text-lg font-bold" style={{ color: themeColors.text }}>
                Coffe Size
              </Text>
              <View className="flex-row justify-between">
                <TouchableOpacity
                  onPress={()=>setSize("small")}
                  className="px-8 p-3 rounded-full"
                  style={{ backgroundColor: size == "small" ? themeColors.bgLight : "rgba(0,0,0,0.07)" }}>
                  <Text className={size == "small" ? "text-white" : "text-gray-700"}>Small</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSize("medium")}
                  className="px-8 p-3 rounded-full"
                  style={{ backgroundColor: size == "medium" ? themeColors.bgLight : "rgba(0,0,0,0.07)" }}>
                  <Text className={size == "medium" ? "text-white" : "text-gray-700"}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>setSize("large")}
                  className="px-8 p-3 rounded-full"
                  style={{ backgroundColor: size == "large" ? themeColors.bgLight : "rgba(0,0,0,0.07)" }}>
                  <Text className={size == "large" ? "text-white" : "text-gray-700"}>Large</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="mx-4 space-y-2 h-28">
              <Text className="text-lg font-bold"
                style={{color: themeColors.text}}
              >
                About
              </Text>
              <Text className="text-gray-700">{item.desc}</Text>
            </View>
            <View className="flex-row justify-between items-center mx-4 mb-2">
              <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-700 font-semibold">Volume</Text>
                <Text className="text-base text-black font-semibold">{item.volume}</Text>
              </View>
              <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
                <TouchableOpacity>
                  <MinusIcon size={20} strokeWidth={3} color={themeColors.text}/>
                </TouchableOpacity>
                <Text className="text-lg font-extrabold" style={{ color: themeColors.text }}>2</Text>
                <TouchableOpacity>
                  <PlusIcon size={20} strokeWidth={3} color={themeColors.text} />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
    </View>
  )
}

export default ProductScreen