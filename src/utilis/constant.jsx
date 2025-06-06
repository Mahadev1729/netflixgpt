export const LOGO_URL =
  "https://www.pngall.com/wp-content/uploads/13/Netflix-Logo-PNG-Clipart.png";
export const USER_AVATAR =
  "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg";
export const BACKGROUND_IMAGE =
  "https://www.teknofilo.com/wp-content/uploads/2021/06/Netflix-1280x720.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL =
  "https://image.tmdb.org/t/p/w780";
  
  export const SUPPORTED_LANGUAGES = [
    ["en", "English"],
    ["hi", "Hindi"],
    ["es", "Spanish"],
    ["fr", "French"],
    ["de", "German"],
    ["zh", "Chinese"],
    ["ja", "Japanese"],
    ["ru", "Russian"],
    ["ar", "Arabic"],
    ["pt", "Portuguese"],
    ["bn", "Bengali"],
    ["pa", "Punjabi"],
    ["ko", "Korean"],
    ["it", "Italian"],
    ["ur", "Urdu"],
    ["ta", "Tamil"],
    ["te", "Telugu"],
    ["mr", "Marathi"],
    ["tr", "Turkish"],
    ["vi", "Vietnamese"],
    ["gu", "Gujarati"],
    ["pl", "Polish"],
    ["uk", "Ukrainian"],
    ["fa", "Persian"],
    ["ro", "Romanian"],
    ["nl", "Dutch"],
    ["th", "Thai"],
    ["sv", "Swedish"],
    ["id", "Indonesian"],
    ["ms", "Malay"],
  ].map(([identifier, name]) => ({ identifier, name }));


  
  