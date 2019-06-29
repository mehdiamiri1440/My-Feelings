import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { deviceHeight, deviceWidth } from "./../../../utils/const/index";
import { connect } from "react-redux";
import * as LanguageActions from "../../../redux/actions/language";

class Landing extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Image
          style={{
            flex: 1,
            resizeMode: "stretch"
          }}
          source={require("../../../../assets/images/vr.png")}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
            height: "100%",
            alignContent: "center",
            alignItems: "center",
            position: "absolute"
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Choose Your Language :
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.changeLanguage("en");
              this.props.navigation.navigate("Home");
            }}
          >
            <Text style={{ color: "white" }}>ENGLISH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.changeLanguage("fa");
              this.props.navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "white"
              }}
            >
              PERSIAN
            </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
mapDispatchToProps = dispatch => {
  return {
    changeLanguage: lang => dispatch(LanguageActions.setLocale(lang))
  };
};
export default connect(
  undefined,
  mapDispatchToProps
)(Landing);
