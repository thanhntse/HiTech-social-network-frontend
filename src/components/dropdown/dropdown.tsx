import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, multiple = false }) => {
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
      <button
        onClick={toggleDropdown}
        className="w-full py-2.5 px-4 bg-inherit text-inherit text-base font-medium font-primary rounded-md border border-solid border-gray-200 dark:border-gray-800 flex items-center gap-2 cursor-pointer hover:border-primary dark:hover:border-primary-dark transition-all duration-300 ease-in-out"
      >
        {selectedOptions.length > 0
          ? options
              .filter(option => selectedOptions.includes(option.value))
              .map(option => option.label)
              .join(', ')
          : 'Select options'}
        <ChevronDown
          strokeWidth={1.5}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white dark:bg-bg-secondary-dark rounded-md shadow-lg z-10">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-bg-primary-dark rounded-md transition ${
                selectedOptions.includes(option.value) ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : ''
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
