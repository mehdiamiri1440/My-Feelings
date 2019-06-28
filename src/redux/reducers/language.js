import * as languageTypes from "../types/language";
import languages from "../../utils/const/languages.json";
import messages from "../../languages/messages";
intialState = { language: languages["en"], messages: messages["en"] };
export default (languageReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case languageTypes.SET_LOCALE:
      return {
        ...state,
        language: languages[actions.lang],
        messages: messages[actions.lang]
      };
    default:
      return state;
  }
});
