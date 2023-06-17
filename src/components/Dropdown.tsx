import React, { useState } from "react";

interface DropdownProps {
  dropdownLabel: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownLabel, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown text-center p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
        <button className="text-2xl font-bold mx-auto flex items-center" onClick={toggleDropdown}>
            {dropdownLabel}
            {!isOpen && ( 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-start">
                    <path d="M12 19.59L5.71 13.3a1 1 0 0 1 1.41-1.41L12 16.17l4.88-4.88a1 1 0 1 1 1.41 1.41L12 19.59z"/>
                </svg>
            )}
            {!!isOpen && ( 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-end rotate-180">
                    <path d="M12 19.59L5.71 13.3a1 1 0 0 1 1.41-1.41L12 16.17l4.88-4.88a1 1 0 1 1 1.41 1.41L12 19.59z"/>
                </svg>
            )}

        </button>

        {!!isOpen && (
        <div className="dropdown-menu border-t-2">
            <ul>
            {options.map((option, index) => (
                <li className="mt-2 font-medium" key={index}>{option}</li>
            ))}
            </ul>
        </div>
        )}
    </div>
  );
};

export default Dropdown;
