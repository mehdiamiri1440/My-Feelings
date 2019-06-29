import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../components/screens/Home/home";
import Landing from "../components/screens/Landing/landing";
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Landing: {
      screen: Landing,
      navigationOptions: { header: null, tabBarVisible: false }
    }
  },
  { initialRouteName: "Landing" }
);
export default createAppContainer(AppNavigator);
