import I18n from "i18n-js";

// Import all locales
import en from "./en.json";
import hi from "./hi.json";

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  hi
};

// I18n.locale = 'en';
// The method we'll use instead of a regular string
export function lang(name, params = {}) {
  return I18n.t(name, params);
}

export function getString(object, selectedLanguage) {
  let returnString = "";
  const userLanguage = selectedLanguage || localStorage.getItem("lang");
  switch (userLanguage) {
    case "en":
      returnString = object.en;
      break;
    case "hi":
      returnString = object.hi;
      break;
    default:
      returnString = object.en;
      break;
  }
  return returnString || object.en || object.hi;
}

export default I18n;
