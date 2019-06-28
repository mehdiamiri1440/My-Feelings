import React, { Component } from "react";
import { View, Text } from "react-native";
import { injectIntl } from "react-intl";
class Routes extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.intl.formatMessage({ id: "mainText" })}</Text>
      </View>
    );
  }
}

export default injectIntl(Routes);
