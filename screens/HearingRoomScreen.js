import React, { useEffect, useRef, useState } from "react";
import { Linking, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import { FocussedStatusBar } from "../components";
import CaseHeader from "../components/CaseHeader";
import { COLORS, FONTS } from "../constants";
import { Camera, CameraType } from "expo-camera";

const HearingRoomScreen = ({ navigation }) => {
  let cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar backgroundColor={COLORS.primary} />
      <CaseHeader navigation={navigation} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {hasPermission ? (
          <Camera type={type} ref={cameraRef} style={{ width: "100%", height: "100%" }}></Camera>
        ) : (
          <Text>Permission issue. Allow Trialview to access your camera</Text>
        )}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: "10%",
          backgroundColor: COLORS.gray,
          opacity: 0.5,
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold }}>Hearing will commence soon!</Text>
        <Text style={{ fontFamily: FONTS.regular, alignItems: "center" }}>For any queries contact</Text>
        <TouchableHighlight onPress={() => Linking.openURL("mailto:info@trialview.com")}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "blue",
            }}
          >
            info@trialview.com
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default HearingRoomScreen;
