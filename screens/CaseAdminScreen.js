import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FocussedStatusBar } from "../components";
import CaseHeader from "../components/CaseHeader";
import { COLORS } from "../constants";

const CaseAdminScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <CaseHeader navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundColor: COLORS.white,
        }}
      >
        <Text>Case admin section. Coming soon!!</Text>
      </View>
    </SafeAreaView>
  );
};

export default CaseAdminScreen;
