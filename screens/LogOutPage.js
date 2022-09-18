import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FocussedStatusBar, RectButton } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const LogOutPage = () => {
  const naviagation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.white }}>
        <Text style={{ fontSize: SIZES.medium }}>You have been successfully logged out.</Text>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>Thank You!</Text>
        <View style={{ margin: "auto", marginBottom: 25, marginTop: 25 }}>
          <RectButton buttonText={"Log In"} minWidth={150} handlePress={() => naviagation.navigate("LogIn")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogOutPage;
