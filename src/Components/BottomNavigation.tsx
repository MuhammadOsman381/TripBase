import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapIcon from '../Icons/Bottom Navigation/MapIcon';
import SearchIcon from '../Icons/Bottom Navigation/SearchIcon';
import HeartIcon from '../Icons/Bottom Navigation/HeartIcon';
import MagicIcon from '../Icons/Bottom Navigation/MagicIcon';

// Custom Footer Navigation Component
const BottomNavigation = ({ navigation }) => {
    return (
      <View className="bottom-0 absolute bg-white border-t border-[#f0f0f0] py-3 flex flex-row justify-center items-center">
        <View className='w-[25%] flex flex-col justify-center items-center'>
            <MapIcon style={{color: '#020617'}}></MapIcon>
            <Text className="text-[#020617]" >Map</Text>
        </View>
        <View className='w-[25%] flex flex-col justify-center items-center'>
            <SearchIcon/>
            <Text className="text-[#94A3B8]">Explore</Text>
        </View>
        <View className='w-[25%] flex flex-col justify-center items-center'>
            <HeartIcon/>
            <Text className="text-[#94A3B8]">Favourites</Text>
        </View>
        <View className='w-[25%] flex flex-col justify-center items-center'>
            <MagicIcon/>
            <Text className="text-[#94A3B8]">AI Chat</Text>
        </View>
      </View>
    );
  };

  export default BottomNavigation;