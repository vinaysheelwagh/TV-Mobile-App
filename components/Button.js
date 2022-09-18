import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const RectButton = ({
  minWidth,
  maxWidth,
  backgroundColor = COLORS.primary,
  color = COLORS.white,
  fontSize,
  handlePress,
  buttonText,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        borderColor: COLORS.primary,
        borderWidth: 0.5,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        maxWidth: maxWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
      disabled={disabled}
    >
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: fontSize, color, textAlign: "center" }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
