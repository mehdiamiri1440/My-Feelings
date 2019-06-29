import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <View>
        <Text>{formatMessage({ id: "mainText" })}</Text>
        <Text style={{ fontFamily: "GothamLight" }}>persian</Text>
      </View>
    );
  }
}

export default injectIntl(Home);
