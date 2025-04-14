'use client';
import React, { useEffect, useState } from 'react';
import { IconDropdown, Iconify, MouseTooltip } from 'nextmastery';
import { ClassNameType } from 'nextmastery/props';

interface SelectType {
  className?: ClassNameType;
  titleClass?: ClassNameType;
  listClass?: ClassNameType;
  value?: any;
  setValue?: (v: any) => void;
  contentTitle?: string; //use for value in contents,
  contentId?: string; //use for key title in contents,
  contents?: Record<string, any>[];
  placeholder?: string;
  label?: string;
}
const SelectDropdown = ({
  className = 'min-w-40',
  titleClass = '',
  listClass,
  value,
  setValue,
  contents = [
    {
      title: 'Abc',
      id: '1',
    },
    {
      title: 'Efg',
      id: '2',
    },
  ],
  contentId = 'id',
  contentTitle = 'title',
  placeholder = '',
  label,
}: SelectType) => {
  const [title, setTitle] = useState<string>(placeholder);

  // When selectedField changes, update external value
  useEffect(() => {
    if (contents) {
      const getTitle = contents.find((item) => item[contentId] === value);
      if (getTitle) {
        setTitle(getTitle?.[contentTitle]);
      } else if (placeholder) {
        setTitle(placeholder);
      } else if (label) {
        setTitle(label);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, setValue]);
  const Title = (open: boolean) => {
    return (
      <div
        className={` border border-border ${open ? 'border-b-0' : ''} p-2 select-none ${className} ${titleClass} rounded-lg whitespace-nowrap overflow-hidden`}
      >
        <div className="flex items-center justify-between gap-2">
          <MouseTooltip content={title}>
            <span className="truncate flex-1">{title}</span>
          </MouseTooltip>
          <div className="flex items-center shrink-0">
            {value && (
              <Iconify
                icon={'material-symbols-light:close-small-rounded'}
                className="hover:text-red-500 Transition"
                onClick={() => (setValue ? setValue(null) : null)}
              />
            )}
            <Iconify
              icon={
                open
                  ? 'iconamoon:arrow-up-2-thin'
                  : 'iconamoon:arrow-down-2-thin'
              }
              className=""
            />
          </div>
        </div>
      </div>
    );
  };

  const handleToggle = (content: any) => {
    if (setValue) {
      setValue(content[contentId]);
    }
  };
  return (
    <div className="min-h-80">
      {label && <label>{label}</label>}
      <IconDropdown customTitle={Title} style="dropdown" contentId={contentId}>
        <div className={`${className} ${listClass} flex flex-col`}>
          {contents?.map((content, index) => (
            <span
              key={index}
              className={` text-sm px-2 py-1 cursor-pointer hover:bg-accent ${
                content[contentId] === value
                  ? 'bg-accent/50 text-accent-foreground '
                  : ''
              }`}
              onClick={() => handleToggle(content)}
            >
              {content[contentTitle]}
            </span>
          ))}
        </div>
      </IconDropdown>
    </div>
  );
};

export default SelectDropdown;
