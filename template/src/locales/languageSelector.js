const langString = (object, selectedLanguage) => {
  const userLanguage = selectedLanguage || localStorage.getItem("lang");
  switch (userLanguage) {
    case "en":
      return object.en;
      break;

    case "hi":
      return object.hi;
      break;

    default:
      return object.en;
      break;
  }
};

export default langString;
