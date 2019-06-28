import * as LanguageTyps from "../types/language";
export const setLocale = lang => {
  return {
    type: LanguageTyps.SET_LOCALE,
    lang
  };
};
