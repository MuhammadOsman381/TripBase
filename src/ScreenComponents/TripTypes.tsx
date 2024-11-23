// src/screens/HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, BackHandler } from "react-native";
import { RadioButton } from 'react-native-paper';
import IpodIcon from "../Icons/TripTypes/IpodIcon";
import CalendarIcon from "../Icons/TripTypes/CalendarIcon";
import ClockIcons from "../Icons/TripTypes/ClockIcon";

// Define the type for the props
interface HomeComponentProps {
    changeComponent: (component: string) => void;
}

const TripTypes: React.FC<Props> = ({ changeComponent }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options: OptionTypes[] = [
        { option: "Plan a Future Trip", iconName: CalendarIcon },
        { option: "I'm Currently Traveling", iconName: IpodIcon },
        { option: "Add a Previous Trip", iconName: ClockIcons },
    ];

    useEffect(() => {
        // Listen to the back button press on Android
        const backAction = () => {
            // Navigate back to the 'home' component when back button is pressed
            changeComponent('home');
            return true; // Prevent default back button behavior
        };

        // Add event listener for the back button
        BackHandler.addEventListener('hardwareBackPress', backAction);

        // Cleanup the event listener on unmount
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
    }, [changeComponent]);

    return (
        <View className="px-3">
            <View className="items-center mb-5 mt-10">
                <Text className="text-2xl font-semibold text-center">What Kind of trip</Text>
                <Text className="text-2xl font-semibold text-center">do you want to add?</Text>
                <Text className="text-lg font-light text-center text-gray-600 mt-2">Change this whenever you like</Text>
            </View>

            <View className="w-full mt-2 ">
                {options.map((option, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => setSelectedOption(option.option)}>
                        <View className="w-full  flex-row items-center justify-between p-4 border border-gray-300 rounded-2xl mb-4 ">
                            <View className="flex-row items-center">
                                <View className="w-10 h-10 items-center justify-center rounded-lg border-transparent">
                                    < option.iconName />
                                </View>
                                <Text className="ml-2 text-lg font-semibold">{option.option}</Text>
                            </View>
                            <RadioButton
                                value={option.option}
                                status={selectedOption === option.option ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedOption(option.option)}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>

            <TouchableOpacity>
                <View className="bg-black py-3.5 rounded-lg items-center mt-6">
                    <Text className="text-lg text-white font-semibold">Continue</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TripTypes;
