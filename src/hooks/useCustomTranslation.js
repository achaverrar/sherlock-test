import { useTranslation } from "react-i18next";

const LANGUAGES = [
  {
    code: "en",
    language: "English"
  },
  /* {
    code: "es",
    language: "Español"
  } */
]

export const useCustomTranslation = () => {
  const { t, i18n: {language, changeLanguage}, ready } = useTranslation();

  return {
    changeLanguage,
    getTranslatedTooltipConfig: (translationKey) => ({
      content: t(`${translationKey}.tooltip.content`),
      isHtml: t(`${translationKey}.tooltip.isHtml`),
    }),
    getTranslatedPlaceholder: (translationKey) => ready ? t(`${translationKey}.placeholder`, "") : "",
    getTranslatedPlainText: (translationKey, interpolationObj = {}) => ready ? t(`${translationKey}`, interpolationObj) : "",
    getTranslatedSelectOptions: (translationKey) => {
      const options = [];
      const optionsJson = t(`${translationKey}.options`, { returnObjects: true });

      for(const option in optionsJson) {
        options.push({label: optionsJson[option], value: option})
      }

      return options;
    },
    language,
    languages: LANGUAGES,
    isLoadingTranslation: !ready
  };
};
