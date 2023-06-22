import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, 
  Image, 
  View, 
  StyleSheet, 
  Platform, 
  Text, 
  TouchableOpacity, 
  TextInput,
  FlatList
} from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { MagnifyingGlassIcon, BellIcon } from 'react-native-heroicons/outline';
import { categories, coffeeItems } from '../constants';
import CoffeeCard from '../components/coffeeCard';

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 50 : 0
  }
});
 
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1)
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar style="auto"/>
      <Image source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{height: 220}}
      />
      <SafeAreaView className="flex-1" style={styles.AndroidSafeArea}>
        {/* avatar and bell icon */}
        <View className="px-3 flex-row justify-between items-center">
          <Image source={require("../assets/images/avatar.png")}
          className="h-9 w-9 rounded-full"
          />
          <View className="flex-row itemss-center space-x-2">
            <MapPinIcon size={25} color={themeColors.bgLight}/>
            <Text className="text-base font-semibold">Lagos, LG</Text>
          </View>
          <BellIcon size={25} color={"black"}/>
        </View>

        {/* search bar */}
        <View className="mx-5 mt-6">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder="Search" className="p-4 flex-1 font-semibold text-gray-700"/>
            <TouchableOpacity className="rounded-full p-4"
            style={{backgroundColor: themeColors.bgLight}}
            >
              <MagnifyingGlassIcon size={25} color={"white"} strokeWidth={2}/>
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-5 mt-6">
          <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal
          className="overflow-visible"
          keyExtractor={(item:any)=>item.id}
          renderItem={({item})=>{
            let active = activeCategory == item.id;
            let activeText = active ? "text-white" : "text-gray-700"
            return(
              <TouchableOpacity onPress={()=>setActiveCategory(item.id)}
                style={{ backgroundColor: activeCategory == item.id ? themeColors.bgLight : "rgba(0,0,0,0,0.07)"}}
            className="p-4 rounded-full mr-2 shadow"
            >
                <Text className={ `${activeText} font-semibold`}>{item.title}</Text>
            </TouchableOpacity>
            )
          }}
          />
        </View>
        {/* Coffee Cards */}
        <View className="mt-6">
          <FlatList
          showsHorizontalScrollIndicator={false}
          data={coffeeItems}
          horizontal
          className="overflow-visible"
          renderItem={({item})=><CoffeeCard item={item}/>}
        />
        </View>
      </SafeAreaView>
    </View>
  );
}

 
export default HomeScreen;