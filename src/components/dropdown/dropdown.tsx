import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import RenderIf from '../RenderIf';
import { useTranslation } from 'react-i18next';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, multiple = false }) => {
  const { t } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    if (multiple) {
      setSelectedOptions(prev =>
        prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value]
      );
    } else {
      setSelectedOptions([value]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className={`w-full min-w-52 text-ellipsis py-2.5 px-4 font-medium rounded-md border border-solid border-gray-200 dark:border-gray-800 flex justify-between items-center gap-3 cursor-pointer hover:border-primary dark:hover:border-primary-dark transition-all duration-300 ease-in-out ${isOpen ? " border-primary dark:border-primary-dark " : ""}`}
      >
        <RenderIf
          ifTrue={selectedOptions.length > 0}
        >
          <div
            className='max-w-60 line-clamp-1'
          >
            {
              options
                .filter(option => selectedOptions.includes(option.value))
                .map(option => t(option.label))
                .join(', ')
            }
          </div>
        </RenderIf>
        <RenderIf
          ifTrue={selectedOptions.length <= 0}
        >
          {
            t('selectOptions')
          }
        </RenderIf>
        <ChevronDown
          strokeWidth={1.5}
          className={`${isOpen ? "rotate-180" : ""} transition-all ease-in-out duration-300`}
        />
      </div>
      <RenderIf
        ifTrue={isOpen}
      >
        <div className="absolute left-0 top-full p-1 mt-1 w-full bg-white dark:bg-bg-secondary-dark border border-solid border-primary dark:border-primary-dark rounded-md shadow-lg z-10 flex flex-col gap-1">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-bg-primary-dark rounded-md transition ${selectedOptions.includes(option.value) ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : ''
                }`}
            >
              {t(option.label)}
            </div>
          ))}
        </div>
      </RenderIf>
    </div>
  );
};

export default Dropdown;
