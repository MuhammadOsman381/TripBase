// src/screens/HomeScreen.tsx
import React, { useRef, useMemo, useCallback, useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Map from '../Components/Map';

// Animation
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import HomeComponent from "../ScreenComponents/HomeComponent";
import TripBaseInvite from "../ScreenComponents/TripBaseInvite";
import TripTypes from "../ScreenComponents/TripTypes";
import BottomNavigation from "../Components/BottomNavigation";

// Navigation
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    // Sheet's bottom Position
    const bottomSheetPosition = useSharedValue(0);
    const sheetRef = useRef<BottomSheet>(null);

    // Bottom Sheet Status
    const [isOpen, setIsOpen] = useState<boolean>(true);
    // Initialize the activeComponent with a default value (e.g., 'home')
    const [activeComponent, setActiveComponent] = useState('home');

    // Function to change activeComponent dynamically
    const changeComponent = (component: any) => {
      setActiveComponent(component);
    };
  
    
    // Bottom Sheets Snap Points
    const snapPoints = useMemo(() => {
      switch (activeComponent) {
        case 'home':
          return ["35%", "50%", "90%", "100%"]; // Snap points for Home component
        case 'invite':
          return ["35%","60%"]; // Snap points for Invite component
        case 'types':
          return ["60%", "80%"]; // Snap points for Types component
        default:
          return ["35%", "50%", "90%", "100%"];
      }
    }, [activeComponent]);
    
    // Function to render different components based on the activeComponent state
    const renderContent = () => {
      switch (activeComponent) {
        case 'home':
          return <HomeComponent changeComponent={changeComponent} />;
        case 'invite':
          return <TripBaseInvite changeComponent={changeComponent} />;
        case 'types':
          return <TripTypes changeComponent={changeComponent} />;
        default:
          return <HomeComponent changeComponent={changeComponent} />;
      }
    };
    // Animated style for smooth transition of top element
    const animatedTopElementStyle = useAnimatedStyle(() => {
      return {
        height: withSpring(bottomSheetPosition.value, {
          damping: 15,
          stiffness: 200,
          duration: 300
        }),
      };
    });
  
    // Bottom Sheets when Clicked on BG
    const closeBottom = () => {
      if(!isOpen){
        sheetRef.current?.close()
      }else{
        sheetRef.current?.snapToIndex(0);
      }
      setIsOpen(!isOpen);
    }
  
    // Memoizing the Map component to avoid unnecessary re-renders
    const MemoizedMap = useMemo(() => {
       <Map className="h-[100%] w-[100%]" />
    }, []);

  return (
    <GestureHandlerRootView>
        {/* <TouchableWithoutFeedback onPress={closeBottom}> */}
            <Animated.View style={[animatedTopElementStyle]}>
                    <View className="w-[100%] h-[100%]">
                      {/* {MemoizedMap} */}
                      <Map closeBottom={closeBottom}></Map>
                    </View>
            </Animated.View>
        {/* </TouchableWithoutFeedback> */}

    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      animatedPosition={bottomSheetPosition}
      enablePanDownToClose={true}>
      <BottomSheetScrollView>
        {renderContent()}
      </BottomSheetScrollView>
    </BottomSheet>
    <BottomNavigation></BottomNavigation>
  </GestureHandlerRootView>
  );
};


export default HomeScreen;
