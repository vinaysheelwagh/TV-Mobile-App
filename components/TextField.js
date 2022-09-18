import React from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS, SIZES } from "../constants";

const TextField = ({ label, textContentType, placeholder, defaultValue, multiline = false, numberOfLines }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ marginBottom: 10 }}>{label}</Text>
      <View
        style={{
          width: "100%",
          borderRadius: SIZES.font,
          borderColor: COLORS.gray,
          borderWidth: 1,
          backgroundColor: COLORS.white,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 4,
        }}
      >
        <TextInput
          textContentType={textContentType}
          placeholder={placeholder}
          defaultValue={defaultValue}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onChangeText={(val) => console.log(val)}
        />
      </View>
    </View>
  );
};

export default TextField;
