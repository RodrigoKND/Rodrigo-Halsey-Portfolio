import spanish from "@/i18n/es.json";
import english from "@/i18n/en.json";

const languages = {
    es: "es",
    en: "en",
};

export const geti18n = ({ currentLanguage = "es" }: { currentLanguage?: string }) => {
    if (currentLanguage === languages.es) return spanish;
    if (currentLanguage === languages.en) return english;

    return spanish;
}