import { View, TextInput, Image, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "../constants";
import { FocussedStatusBar, RectButton } from "../components";

const LogIn = () => {
  const naviagation = useNavigation();
  const [userNameVal, setUserNameVal] = useState("");
  const [passwordVal, setPassWordVal] = useState("");
  const [error, setError] = useState(false);
  const validateUser = () => {
    if (userNameVal === "test@trialview.com" && passwordVal === "trialview") return naviagation.navigate("WelcomePage");
    else setError(true);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: SIZES.extraLarge + 20, color: COLORS.primary, fontFamily: FONTS.semiBold }}>
            TRIAL<Text style={{ fontFamily: FONTS.light }}>VIEW</Text>
          </Text>
          <View style={{ margin: 10, width: "70%" }}>
            <TextInput
              style={{ borderWidth: 0.5, padding: 5, ...(error && { borderColor: "red" }) }}
              placeholder="Username"
              onChangeText={(val) => {
                setUserNameVal(val);
                setError(false);
              }}
              value={userNameVal}
            />
          </View>
          <View style={{ margin: 10, width: "70%" }}>
            <TextInput
              style={{ borderWidth: 0.5, padding: 5, ...(error && { borderColor: "red" }) }}
              placeholder="Password"
              secureTextEntry
              onChangeText={(val) => {
                setPassWordVal(val);
                setError(false);
              }}
              value={passwordVal}
            />
          </View>
          <View style={{ margin: "auto", marginBottom: 25, marginTop: 25 }}>
            <RectButton buttonText={"Log In"} minWidth={150} handlePress={validateUser} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
