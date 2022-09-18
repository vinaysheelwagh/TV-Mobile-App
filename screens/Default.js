import { View, TextInput, Image, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants";
import { FocussedStatusBar, RectButton } from "../components";
import assets from "../constants/assets";

const Default = () => {
  const naviagation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Image style={{ margin: "auto" }} source={assets.logo} resizeMode="cover" />
          <View style={{ margin: "auto", marginBottom: 25, marginTop: 25 }}>
            <RectButton buttonText={"Log In"} minWidth={150} handlePress={() => naviagation.navigate("LogIn")} />
          </View>
          <View style={{ margin: "auto" }}>
            <RectButton buttonText={"Sign Up"} minWidth={150} backgroundColor={COLORS.white} color={COLORS.primary} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Default;
