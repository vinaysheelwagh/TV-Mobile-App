import "react-native-reanimated";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Default from "./screens/Default";
import LogIn from "./screens/LogIn";
import WelcomePage from "./screens/WelcomePage";
import CasePageScreen from "./screens/CasePageScreen";
import LogOutPage from "./screens/LogOutPage";
import FilesPageScreen from "./screens/FilesPageScreen";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LogIn">
        {/* <Stack.Screen name="Default" component={Default} /> */}
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="CasePageScreen" component={CasePageScreen} />
        <Stack.Screen name="Documents" component={FilesPageScreen} />
        <Stack.Screen name="LogOutPage" component={LogOutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
