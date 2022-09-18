import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants";

const Cases = ({ navigation }) => {
  const cases = [
    "Bennett Vs Mfh",
    "Stand Up",
    "Khadim Hussain v Allah Hussain & Ors",
    "Devs only",
    " New case default setting",
  ];
  const cardLinks = [
    { label: "Workspace", icon: "database", tab: "All Documents" },
    { label: "Hearing Room", icon: "television", tab: "Hearing Room" },
    { label: "Evidence View", icon: "television", tab: "Hearing Room" },
    { label: "Case Admin", icon: "account-cog", tab: "Case Admin" },
  ];

  return (
    <View>
      {cases.map((item, id) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 15,
            ...(id === 0 && { marginTop: 30 }),
            shadowColor: "#171717",
            shadowOffset: { width: 5, height: 5 },
            shadowRadius: 10,
            shadowOpacity: 1,
            elevation: 15,
            borderColor: COLORS.white,
          }}
          key={id}
        >
          <View
            style={{
              width: "40%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderColor: COLORS.white,
              borderWidth: 0.5,
            }}
          >
            {cardLinks.map((link, id) => (
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 5,
                  alignContent: "center",
                  backgroundColor: COLORS.white,
                  ...(id === 0 && { borderTopLeftRadius: 10 }),
                  ...(id === cardLinks.length - 1 && { borderBottomLeftRadius: 10 }),
                }}
                key={id}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("CasePageScreen", link.tab)}
              >
                <MaterialCommunityIcons name={link.icon} style={{ marginRight: 5 }} size={20} color={COLORS.primary} />
                <Text key={id} style={{ fontSize: SIZES.font, padding: 2 }}>
                  {link.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              backgroundColor: COLORS.primary,
              width: "60%",
              justifyContent: "center",
              padding: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("CasePageScreen", "Documents")}>
              <Text key={id} style={{ color: COLORS.white, fontSize: SIZES.medium, fontFamily: FONTS.medium }}>
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Cases;
