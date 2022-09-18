import React from "react";
import { Linking, Text, TouchableHighlight, View } from "react-native";
import { HomeHeader } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";

const ContactUsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HomeHeader screenName={"Contact Us"} />
      <View style={{ margin: 25, flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          <Text style={{ fontSize: SIZES.large, fontFamily: FONTS.bold }}>Dublin</Text>
          <Text style={{ fontSize: SIZES.medium, fontFamily: FONTS.ligh, textAlign: "center" }}>
            {"Capel Building\nMary’s Abbey\nDublin 7"}
          </Text>
          <Text style={{ marginTop: 10, fontSize: SIZES.medium, fontFamily: FONTS.light }}>
            Phone: +44 (0) 2030516261
          </Text>
        </View>
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          <Text style={{ fontSize: SIZES.large, fontFamily: FONTS.bold }}>London</Text>
          <Text style={{ fontSize: SIZES.medium, fontFamily: FONTS.ligh, textAlign: "center" }}>
            {"Studio 3, Weston St\nBermondsey\nLondon SE1 3ER"}
          </Text>
          <Text style={{ marginTop: 10, fontSize: SIZES.medium, fontFamily: FONTS.light }}>
            Phone: +353 (0) 1 480 4480
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: SIZES.large, fontFamily: FONTS.bold }}>Email</Text>
          <TouchableHighlight onPress={() => Linking.openURL("mailto:info@trialview.com")}>
            <Text
              style={{
                fontSize: SIZES.medium,
                fontFamily: FONTS.light,
                textDecorationLine: "underline",
                color: COLORS.primary,
              }}
            >
              info@trialview.com
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ContactUsPage;
