import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { assets, COLORS, SIZES } from "../constants";

const CaseHeader = ({ onSearch, navigation }) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("WelcomePage")}>
          <MaterialCommunityIcons name="home" size={SIZES.extraLarge} color={COLORS.white} />
        </TouchableOpacity>
        <Image source={assets.logoWhite} resizeMode="contain" style={{ width: 100, height: 50 }} />
      </View>
      {onSearch && (
        <View>
          <View
            style={{
              width: "100%",
              borderRadius: SIZES.font,
              backgroundColor: COLORS.gray,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
            }}
          >
            <Image
              source={assets.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput placeholder="Search Document's" style={{ flex: 1 }} onChangeText={onSearch} />
          </View>
        </View>
      )}
    </View>
  );
};

export default CaseHeader;
