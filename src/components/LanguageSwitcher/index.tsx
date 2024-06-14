import { useState, FC } from 'react';
import { FaCheck, FaChevronDown } from 'react-icons/fa';
import "flag-icons/css/flag-icons.min.css";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'sv', name: 'Svenska' },
];

export interface LanguageSwitcherProps {
  initialLanguage?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ initialLanguage = 'Português' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-56 rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          <span className="flex items-center">
            <span className={`flag-icon flag-icon-${languages.find(lang => lang.name === selectedLanguage)?.code} mr-2`}></span>
            {selectedLanguage}
          </span>
          <FaChevronDown className={`ml-2 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <div
                key={language.code}
                className={`flex justify-between items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-blue-300 ${
                  selectedLanguage === language.name ? 'bg-blue-200' : ''
                }`}
                onClick={() => selectLanguage(language.name)}
              >
                <span className="flex items-center">
                  <span className={`flag-icon flag-icon-${language.code} mr-2`}></span>
                  {language.name}
                </span>
                {selectedLanguage === language.name && (
                  <FaCheck className="h-5 w-5 text-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

