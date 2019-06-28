import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import * as LanguageActions from "../../../redux/actions/language";
class Home extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <View>
        <Text>{formatMessage({ id: "mainText" })}</Text>
        <TouchableOpacity onPress={() => this.props.changeLanguage("fa")}>
          <Text>persian</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.changeLanguage("en")}>
          <Text>english</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Landing")}
        >
          <Text>changeRoute</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
mapDispatchToProps = dispatch => {
  return {
    changeLanguage: lang => dispatch(LanguageActions.setLocale(lang))
  };
};
export default injectIntl(
  connect(
    undefined,
    mapDispatchToProps
  )(Home)
);
