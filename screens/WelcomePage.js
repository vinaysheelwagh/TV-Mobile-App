import React from "react";
import { View, SafeAreaView, Button, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FocussedStatusBar } from "../components";
import { COLORS, SIZES } from "../constants";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import CasePageScreen from "./CasePageScreen";
import UserSettingsPage from "./UserSettingsPage";
import { useNavigation } from "@react-navigation/native";
import ContactUsPage from "./ContactUsPage";
import UserProfile from "./UserProfile";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const naviagation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always", horizontal: "never" }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label={({ focused }) => <Text style={{ color: focused ? COLORS.primary : COLORS.gray }}>Log Out</Text>}
        icon={({ focused }) => (
          <MaterialCommunityIcons name={"logout"} size={24} color={focused ? COLORS.primary : COLORS.gray} />
        )}
        activeBackgroundColor={COLORS.primary}
        activeTintColor={COLORS.primary}
        onPress={() => naviagation.navigate("LogOutPage")}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: SIZES.base }}>Copyright © 2022. All Rights Reserved.</Text>
        <Text style={{ fontSize: SIZES.base }}>Built by TrialView.</Text>
      </View>
    </SafeAreaView>
  );
};

const WelcomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerType: "slide",
          drawerContentContainerStyle: { justifyContent: "space-between" },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={"home"} size={24} color={focused ? COLORS.primary : COLORS.gray} />
            ),
            drawerLabel: ({ focused }) => <Text style={{ color: focused ? COLORS.primary : COLORS.gray }}>Home</Text>,
          }}
        />
        <Drawer.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={"account"} size={24} color={focused ? COLORS.primary : COLORS.gray} />
            ),
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? COLORS.primary : COLORS.gray }}>Profile</Text>
            ),
          }}
        />
        <Drawer.Screen
          name="UserSettingsPage"
          component={UserSettingsPage}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={"account-cog"} size={24} color={focused ? COLORS.primary : COLORS.gray} />
            ),
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? COLORS.primary : COLORS.gray }}>Settings</Text>
            ),
          }}
        />
        <Drawer.Screen
          name="ContactUsPage"
          component={ContactUsPage}
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={"phone"} size={24} color={focused ? COLORS.primary : COLORS.gray} />
            ),
            drawerLabel: ({ focused }) => (
              <Text style={{ color: focused ? COLORS.primary : COLORS.gray }}>Contact Us</Text>
            ),
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default WelcomePage;
