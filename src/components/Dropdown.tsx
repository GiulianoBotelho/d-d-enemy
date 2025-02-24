import { useState } from "react";

interface SelectDropdownProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

export default function SelectDropdown({ options, onSelect }: SelectDropdownProps) {
  const [selected, setSelected] = useState(options[0].value);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value); // Chama a função ao selecionar
    setIsOpen(false);
  };

  return (
    <div className="relative w-40">
      <button
        className="w-full bg-gray-800 text-white px-4 py-2 rounded-md flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((opt) => opt.value === selected)?.label}
        <span className={`ml-2 transform transition ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-gray-800 mt-1 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
