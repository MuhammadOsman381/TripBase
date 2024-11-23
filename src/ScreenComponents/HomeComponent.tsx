import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Ensure you have FontAwesome installed
import { ScrollView } from 'react-native-gesture-handler';
// SVG's
import ChartIcon from '../Icons/HomeScreen/ChartIcon';
// Cards
import TripsCard from "../Components/TripsCard";

// Define the type for the props
interface HomeComponentProps {
  changeComponent: (component: string) => void;
}

const HomeComponent: React.FC<HomeComponentProps> = ({ changeComponent }) => {

    function ChangeRoute(value) {
        changeComponent(value)
    }

  return (
    <ScrollView>
    <View className='w-[100%]'>
      {/* Icon */}
      <View className="flex flex-col">
        
        {/* 1st Section */}
          <TouchableWithoutFeedback onPress={() => ChangeRoute('invite')}>
            <View className="m-2 inline-flex justify-center items-center self-start border-2 border-black rounded-2xl">

            {/* Icon */}
            <Icon
                name="user"
                size={24} // specify the size of the icon
                color="black" // specify the color of the icon
                solid
                />
            </View>
        </TouchableWithoutFeedback>

        {/* 2nd Section */}
        <View className="flex flex-row justify-between items-center m-2">
          {/* Text and Buttons */}
          <Text className="font-bold text-4xl">My Trips</Text>
          {/* Buttons */}
          <View className="flex flex-row">
            {/* Travel Stats Button */}
            <View className="bg-white px-2 py-1 border border-gray-300 rounded-3xl">
              <TouchableWithoutFeedback>
                <View className="flex flex-row justify-center items-center">
                  <ChartIcon width={20} height={20} />
                  <Text className="text-[15px] px-1">Travel Stats</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            {/* Plus Button */}
            <View className="bg-white px-2 py-1 border border-gray-300 rounded-3xl ml-2">
              <TouchableWithoutFeedback onPress={() => ChangeRoute('types')}>
                <View className="flex flex-row justify-center items-center">
                  <Icon
                    name="plus"
                    size={24} // specify the size of the icon
                    color="black" // specify the color of the icon
                    solid
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        {/* 3rd Section */}
          <TripsCard />
      </View>
    </View>
    </ScrollView>
  );
};

export default HomeComponent;