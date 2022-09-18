import React from "react";
import { Platform, View } from "react-native";
import { HomeHeader, ToggleField, TextField, RectButton } from "../components";
import { COLORS, SIZES } from "../constants";

const UserSettingsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HomeHeader screenName={"User Settings"} />
      <View style={{ margin: 25, marginLeft: 60, flexGrow: 1 }}>
        <TextField label={"Unknown"} placeholder={"Type in something"} defaultValue={""} />
        <View style={{ marginTop: Platform.OS === "ios" ? SIZES.font : 5 }}>
          <ToggleField label={"Present Mode"} defaultValue={false} />
        </View>
        <View style={{ marginTop: Platform.OS === "ios" ? SIZES.font : 5 }}>
          <ToggleField label={"Deep Search"} defaultValue={false} />
        </View>
        <View style={{ marginTop: Platform.OS === "ios" ? SIZES.font : 5 }}>
          <ToggleField label={"Echo Cancellation"} defaultValue={true} />
        </View>
        <View style={{ marginTop: Platform.OS === "ios" ? SIZES.font : 5 }}>
          <ToggleField label={"Noise Suppression"} defaultValue={true} />
        </View>
        <View style={{ marginLeft: "auto", marginRight: "auto", marginTop: 25 }}>
          <View>
            <RectButton buttonText={"Save"} maxWidth={150} minWidth={150} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserSettingsPage;
