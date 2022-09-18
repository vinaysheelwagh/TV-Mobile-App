import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, FONTS, SIZES } from "../constants";
import { HomeHeader, RectButton, TextField } from "../components";

const UserProfile = () => {
  const naviagation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HomeHeader screenName={"Profile"} />
      <View style={{ alignItems: "center", margin: 25 }}>
        <View style={{ width: 150, height: 150, paddingLeft: 10 }}>
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", borderColor: COLORS.gray, borderWidth: 1, borderRadius: 100 }}
          />
          <MaterialCommunityIcons
            name={"pencil-circle"}
            style={{ position: "absolute", bottom: 5, right: 5 }}
            size={40}
            color={COLORS.gray}
            onPress={() => console.log("edit pic")}
          />
        </View>
        <View
          style={{
            flexGrow: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <TextField label={"Name"} placeholder={"Type in name"} defaultValue={"TrialView Bot"} />
          <TextField label={"Hearing Rooom Name"} placeholder={"Type in hearing room name"} defaultValue={"TV Bot"} />
          <TextField
            label={"Address"}
            placeholder={"Type in address"}
            defaultValue={" Capel Building, Mary's Abbey\n Dublin 7"}
            multiline={true}
            numberOfLines={2}
          />
          <TextField
            label={"Phone"}
            placeholder={"Type in phone number"}
            defaultValue={"+353 899512958"}
            textContentType={"telephoneNumber"}
          />
          <View style={{ marginLeft: "auto", marginRight: "auto", marginTop: 25 }}>
            <View>
              <RectButton buttonText={"Save"} maxWidth={150} minWidth={150} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
