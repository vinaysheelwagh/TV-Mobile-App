import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ screenName }) => {
  const naviagation = useNavigation();
  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 10, height: 40 }}>
      <MaterialCommunityIcons
        name={"arrow-left"}
        style={{ marginRight: 15 }}
        size={30}
        color={COLORS.gray}
        onPress={() => naviagation.navigate("HomeScreen")}
      />
      <Text style={{ fontSize: SIZES.extraLarge, fontFamily: FONTS.bold, color: COLORS.gray }}>{screenName}</Text>
    </View>
  );
};

export default HomeHeader;
