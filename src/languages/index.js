import React from "react";
import { connect } from "react-redux";
import fa from "react-intl/locale-data/fa";
import en from "react-intl/locale-data/en";
import { addLocaleData, IntlProvider } from "react-intl";
import Routes from "../Routes/index";
global.Intl = require("intl");
addLocaleData([...en, ...fa]);
const Languages = props => {
  const { language, messages } = props;
  return (
    <IntlProvider
      locale={language.name}
      key={language.name}
      messages={messages}
    >
      <Routes />
    </IntlProvider>
  );
};
mapStateToProps = state => {
  const { messages, language } = state.languageReducer;
  return {
    language,
    messages
  };
};
export default connect(mapStateToProps)(Languages);
