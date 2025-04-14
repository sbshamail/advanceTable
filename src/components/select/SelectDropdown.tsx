import React from 'react';
import { IconDropdown } from 'nextmastery';
import { ClassNameType } from 'nextmastery/props';

interface SelectType {
  className?: ClassNameType;
  titleClass?: ClassNameType;
  listClass?: ClassNameType;
}
const SelectDropdown = ({
  className = 'min-w-40',
  titleClass,
  listClass,
}: SelectType) => {
  const Title = () => {
    return (
      <div
        className={`border border-border border-b-0 p-2 select-none ${className} ${titleClass} rounded-lg`}
      >
        Title
      </div>
    );
  };
  return (
    <div className="min-h-96">
      <IconDropdown
        customTitle={Title}
        style="dropdown"
        contentClass={`${className} ${listClass}`}
      />
    </div>
  );
};

export default SelectDropdown;
