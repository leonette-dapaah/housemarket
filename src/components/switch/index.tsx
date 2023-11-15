// Switch.tsx
import React, { InputHTMLAttributes } from 'react';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, ...props }) => {
  return (
    <label className="flex items-center cursor-pointer mr-[45px] ">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div className={`relative ${checked ? 'bg-[#060F42]' :  'bg-gray-300'} w-12 h-6 rounded-full transition-colors duration-200 ease-in-out `}>
        <div className={`absolute left-1 ${checked ? 'translate-x-6' : 'translate-x-0'} top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out`}></div>
      </div>
    </label>
  );
};

export default Switch;
