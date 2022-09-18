import { Platform, StatusBar, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { COLORS } from "../constants";

const FocussedStatusBar = (props) => {
  const isFocussed = useIsFocused();
  return isFocussed ? (
    Platform.OS === "ios" ? (
      <View
        style={{
          width: "100%",
          height: 100, // For all devices, even X, XS Max
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: COLORS.primary,
        }}
      />
    ) : (
      <StatusBar
        animated={true}
        {...props}
        //networkActivityIndicatorVisible={true}
        //translucent
        //backgroundColor={COLORS.primary}
        //barStyle={"dark-content"}
      />
    )
  ) : null;
};

export default FocussedStatusBar;
