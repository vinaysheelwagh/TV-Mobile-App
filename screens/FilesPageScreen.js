import React from "react";
import { Text, View, SafeAreaView, Button } from "react-native";
import { FocussedStatusBar } from "../components";
import { COLORS } from "../constants";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DocumentsScreen from "./DocumentsScreen";
import CaseHeader from "../components/CaseHeader";

function TrialBundles({ navigation }) {
  return <DocumentsScreen navigation={navigation} />;
}

function PrivateBundles({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <CaseHeader navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white }}>
        <Text>No documents found</Text>
      </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

const FilesPageScreen = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <FocussedStatusBar backgroundColor={COLORS.primary} />
    //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //     <Text>FilesPage</Text>
    //   </View>
    // </SafeAreaView>
    // <NavigationContainer>
    <Drawer.Navigator initialRouteName="All Documents" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Trial Bundles" component={TrialBundles} />
      <Drawer.Screen name="Private Bundles" component={PrivateBundles} />
      <Drawer.Screen name="All Documents" component={DocumentsScreen} />
    </Drawer.Navigator>
    //</NavigationContainer>
  );
};

export default FilesPageScreen;
