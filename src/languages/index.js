import React, { Component } from "react";
import { connect } from "react-redux";
import fa from "react-intl/locale-data/fa";
import en from "react-intl/locale-data/en";
import Routes from "../domainRoutes/domainRoutes";
import { addLocaleData, IntlProvider } from "react-intl";
global.Intl = require("intl");
addLocaleData([...en, ...fa]);
const Languages = props => {
  const { language, messages } = props;
  return (
    <IntlProvider locale={language.name} messages={messages}>
      <Routes />
    </IntlProvider>
  );
};
function mapStateToProps(state) {
  const { messages, language } = state.languageReducer;
  return {
    language,
    messages
  };
}
export default connect(mapStateToProps)(Languages);
