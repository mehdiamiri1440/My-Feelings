import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../components/screens/Home/home";
import Landing from "../components/screens/Landing/landing";
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: "Home"
      })
    },
    Landing: { screen: Landing }
  },
  { initialRouteName: "Home" }
);
export default createAppContainer(AppNavigator);
