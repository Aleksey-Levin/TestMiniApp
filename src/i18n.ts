import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "hi": "Hi, ",
            "Total": "Total ",
            "End": "End ",
            "Your_balance": "Your balance ",
            "Mining_speed": "Mining speed ",
            "Ref_reward": "Ref reward ",
            "Ref_Mining_speed": "Ref mining speed ",
            "Your_referal_link": "Your referal link ",
            "Copy": "Copy "
        }
    },
    ru: {
        translation: {
            "hi": "Привет, ",
            "Total": "Всего ",
            "End": "Конец ",
            "Your_balance": "Ваш баланс ",
            "Mining_speed": "Скорость майнинга ",
            "Ref_reward": "Рефф награда ",
            "Ref_Mining_speed": "Скорость рефф майнинга ",
            "Your_referal_link": "Ваша реферальная ссылка",
            "Copy": "Скопировать",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;