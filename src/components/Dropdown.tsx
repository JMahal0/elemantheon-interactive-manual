import React, { useState } from "react";

interface DropdownProps {
  sectionTitle: string;
  paragraphsJsx: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ sectionTitle, paragraphsJsx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
        <button className="text-center text-2xl font-bold mx-auto flex items-center" onClick={toggleDropdown}>
            <span>{sectionTitle}</span>
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
          <div className="text-slate-800 space-y-1 border-t-2 border-amber-800">{paragraphsJsx}</div>
        )}
    </div>
  );
};

export default Dropdown;
