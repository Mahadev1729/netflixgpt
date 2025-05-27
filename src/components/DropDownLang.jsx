import lang from "../utilis/languageConstant";

const DropDownLang = () => {
  return (
    <select className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4  shadow transition duration-200 h-[40px] mt-1.5">
      {Object.keys(lang).map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default DropDownLang;
