// src/screens/HomeScreen.tsx
import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, BackHandler  } from "react-native";

// Define the type for the props
interface HomeComponentProps {
    changeComponent: (component: string) => void;
}

const TripBaseInvite: React.FC<Props> = ({ changeComponent }) => {
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
        <View className='w-[100%]  h-auto flex items-center justify-center p-5  '>
            <View className="w-full h-full flex flex-col items-center justify-center gap-6 ">
                <View className="  w-full h-auto   flex flex-col items-center justify-center gap-3" >
                    <View className="w-full  flex items-center justify-center" >
                        <Text className="text-2xl font-bold  ">Tripbase </Text>
                    </View>
                    <View className="w-full h-auto  flex flex-col items-center justify-center" >
                        <Text className="text-center text-gray-500 text-lg ">
                            Your all-in-one travel companion for
                        </Text>
                        <Text className="text-center text-gray-500 text-lg ">
                            planning, logging, and managing every detail
                        </Text>
                        <Text className="text-center text-gray-500 text-lg ">
                            of your journey!
                        </Text>
                    </View>
                </View>
                <View className="w-full h-auto " >
                    <TouchableOpacity>
                        <View className="bg-black w-full py-3.5 rounded-xl mb-4">
                            <Text className="text-center text-white text-lg font-bold">Sign up</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="bg-transparent w-full py-3.5 rounded-xl  border border-gray-200">
                            <Text className="text-center text-black text-lg font-bold">I have an account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    bottomSheet: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    handleIndicator: {
        backgroundColor: '#ccc',
        width: 40,
        height: 4,
        borderRadius: 2,
    },
});

export default TripBaseInvite;
