// languageService.js
import esTranslation from '/es.json';
import enTranslation from '/en.json';

const translations = {
  es: esTranslation,
  en: enTranslation,
  // Agrega más idiomas aquí si es necesario
};
const getTranslation = (idioma) => {
  return translations[idioma] || translations['es']; // Por defecto, usa inglés si el idioma no está disponible
};


export default getTranslation
