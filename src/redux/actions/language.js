import * as LanguageTyps from "../types/language";
export const setLocale = lang => {
  type: LanguageTyps.SET_LOCALE;
  lang;
};
