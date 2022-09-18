import React from "react";
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FocussedStatusBar } from "../components";
import { COLORS, FONTS, SIZES, assets } from "../constants";
import Cases from "./Cases";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: COLORS.primary, height: 100 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ width: 45, height: 45, paddingLeft: 10 }}>
                <Image source={assets.person03} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
                <Image
                  source={assets.badge}
                  resizeMode="contain"
                  style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0 }}
                />
              </View>
            </TouchableOpacity>
            <Image source={assets.logoWhite} resizeMode="contain" accessible={true} />
          </View>
          <View style={{ height: 50, marginHorizontal: SIZES.small }}>
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.large, color: COLORS.white }}>Hello there👋</Text>
          </View>
        </View>
        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -1 }}>
          <View style={{ height: 70, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 30 }}>
            <ScrollView style={{ width: "100%", height: "100%" }}>
              <Cases navigation={navigation} />
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
