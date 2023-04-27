import translate from "translate"

translate.engine = "google"; // "google", "yandex", "libre", "deepl"

const text = await translate("Hello world", {to: "hindi"});
console.log(text);