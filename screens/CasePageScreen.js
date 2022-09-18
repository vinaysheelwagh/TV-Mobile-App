import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FilesPageScreen from "./FilesPageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CaseAdminScreen from "./CaseAdminScreen";
import HearingRoomScreen from "./HearingRoomScreen";
import DocumentsScreen from "./DocumentsScreen";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const CasePageScreen = ({ route }) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={route.params}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "Documents") {
              iconName = focused ? "file-document-multiple" : "file-document-multiple-outline";
            } else if (rn === "Case Admin") {
              iconName = focused ? "account-cog" : "account-cog-outline";
            } else if (rn === "Hearing Room") {
              iconName = focused ? "youtube-tv" : "television";
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: route.name === "Documents" ? "Documents" : route.name,
          tabBarStyle: { padding: 10, height: Platform.OS === "ios" ? 90 : 60 }, //android 60 // ios
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Documents"
          component={FilesPageScreen}
          options={
            {
              //header: (props) => <HomeHeader {...props} />,
              //headerTitleStyle: { zIndex: -10 },
            }
          }
        />
        <Tab.Screen name="Hearing Room" component={HearingRoomScreen} />
        <Tab.Screen name="Case Admin" component={CaseAdminScreen} />
      </Tab.Navigator>
    </>
  );
};

export default CasePageScreen;
