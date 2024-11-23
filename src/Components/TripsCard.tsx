import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import CalendarIcon from "../Icons/HomeScreen/CalendarIcon";
import ClockIcon from "../Icons/HomeScreen/ClockIcon";
import RouteIcon from "../Icons/HomeScreen/RouteIcon";

const TripsCard = () => {
  const [data, setData] = useState([
    {
      id: 0,
      img: require('../../assets/images/hong-kong.jpg'),
      highlight: 'Highlights of Japan',
      badges: [
        require('../../assets/images/CZ.png'),
        require('../../assets/images/DK.png'),
        require('../../assets/images/IR.png'),
        require('../../assets/images/JP.png'),
        '',
        '',
        '',
        '',
      ],
      date: 'Nov 24',
      days: 38,
      stops: 14,
    },
    {
        id: 1,
        img: require('../../assets/images/hong-kong.jpg'),
        highlight: 'Highlights of Japan',
        badges: [
          require('../../assets/images/CZ.png'),
          require('../../assets/images/DK.png'),
          require('../../assets/images/IR.png'),
          require('../../assets/images/JP.png'),
          '',
          '',
          '',
          '',
        ],
        date: 'Nov 24',
        days: 38,
        stops: 14,
      },
      {
        id: 2,
        img: require('../../assets/images/hong-kong.jpg'),
        highlight: 'Highlights of Japan',
        badges: [
          require('../../assets/images/CZ.png'),
          require('../../assets/images/DK.png'),
          require('../../assets/images/IR.png'),
          require('../../assets/images/JP.png'),
          '',
          '',
          '',
          '',
        ],
        date: 'Nov 24',
        days: 38,
        stops: 14,
      },
      {
        id: 3,
        img: require('../../assets/images/hong-kong.jpg'),
        highlight: 'Highlights of Japan',
        badges: [
          require('../../assets/images/CZ.png'),
          require('../../assets/images/DK.png'),
          require('../../assets/images/IR.png'),
          require('../../assets/images/JP.png'),
          '',
          '',
          '',
          '',
        ],
        date: 'Nov 24',
        days: 38,
        stops: 14,
      },
      {
        id: 4,
        img: require('../../assets/images/hong-kong.jpg'),
        highlight: 'Highlights of Japan',
        badges: [
          require('../../assets/images/CZ.png'),
          require('../../assets/images/DK.png'),
          require('../../assets/images/IR.png'),
          require('../../assets/images/JP.png'),
          '',
          '',
          '',
          '',
        ],
        date: 'Nov 24',
        days: 38,
        stops: 14,
      },
    // Add more objects as needed
  ]);

    //   API call here

  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="m-2 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 p-3">
          <Image
            source={item.img}
            className="w-[100%] h-[200px] rounded-lg"
          />
          <View className="flex flex-row justify-between items-center mt-2">
            <Text className="text-gray-700 font-bold text-2xl">
              {item.highlight}
            </Text>

            <View className="flex flex-row">
              {item.badges.slice(0, 4).map((badge, index) => (
                <Image
                  key={index}
                  source={badge}
                  style={{ width: 25, height: 25, marginLeft: index === 0 ? 0 : -10 }}
                />
              ))}
              {item.badges.length > 4 && (
                <View
                  className="bg-[#F2F4F7] w-[25px] h-[25px] justify-center items-center rounded-xl border-[#fff]"
                  style={{ marginLeft: -10 }}
                >
                  <Text>+{item.badges.length - 4}</Text>
                </View>
              )}
            </View>
          </View>

          <View className="flex flex-row items-center mt-2">
            <View className="w-[33%] flex flex-row items-center">
              <CalendarIcon />
              <Text className="text-[#667085] mx-2">{item.date}</Text>
            </View>
            <View className="w-[33%] flex flex-row justify-center items-center">
              <ClockIcon />
              <Text className="text-[#667085] mx-2">{item.days} days</Text>
            </View>
            <View className="w-[33%] flex flex-row justify-center items-center">
              <RouteIcon />
              <Text className="text-[#667085] mx-2">{item.stops} stops</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default TripsCard;