import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "./Button";

const DocumentCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.base,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.secondary }}>
            {data.name}
          </Text>
          <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.gray }}>{data.id}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {data.hasAnnotations && (
              <MaterialCommunityIcons name="note" size={SIZES.font} color={"#FF5722"} style={{ marginRight: 5 }} />
            )}
            {data.tags.length > 0 && (
              <MaterialCommunityIcons name="tag" size={SIZES.font} color={COLORS.primary} style={{ marginRight: 5 }} />
            )}
            {data.private && (
              <MaterialCommunityIcons
                name="account-lock"
                size={SIZES.font}
                color={COLORS.secondary}
                style={{ marginRight: 10 }}
              />
            )}
            <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.gray }}>
              {(data.size / (1024 * 1024)).toFixed(2) + " MB"}
            </Text>
          </View>
          <RectButton
            minWidth={80}
            fontSize={SIZES.font}
            handlePress={() => {
              console.log("presseddd");
              return naviagation.navigate("Details", { data });
            }}
            buttonText="View"
            disabled={true}
          />
        </View>
      </View>
    </View>
  );
};

export default DocumentCard;
