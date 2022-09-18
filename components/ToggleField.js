import React, { useState } from "react";
import { Text, Switch, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const ToggleField = ({ label, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <View
      style={{
        //marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Text>{label}</Text>
      <Switch thumbColor={value ? COLORS.primary : COLORS.gray} value={value} onChange={() => setValue(!value)} />
    </View>
  );
};

export default ToggleField;
