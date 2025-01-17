"use client";
import React, { FC } from "react";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@/@core/common/popOver/PopOver";
import Iconify from "@/@core/common/icon";
import Shadow from "@/@core/tag/Shadow";
import { ClassNameType } from "@/utils/interfaces/commonTypes";
import { twMerge } from "tailwind-merge";

export interface ContentItem {
  [key: string]: any;
  icon?: string;
  title: string | number;
  click: () => void;
  className?: ClassNameType;
}
interface Props {
  icon?: string;
  customIcon?: () => React.ReactNode;
  contents?: ContentItem[];
  contentId?: string; //use for key title in contents,
  style?: "dropdown" | "popover";
  title?: string;
  contentClass?: ClassNameType;
  mouseTrigger?: boolean;
  toggleOnContent?: boolean;
}

const IconDropdown: FC<Props> = ({
  icon,
  title,
  contents = [
    {
      title: "Create",
      icon: "tabler:plus",
      click: () => {},
    },
    {
      title: "Edit",
      icon: "tabler:edit",
      click: () => {},
    },
  ],
  contentId = "title",
  style,
  customIcon,
  contentClass,
  mouseTrigger,
  toggleOnContent,
}) => {
  const handleToggle = (click?: () => void) => {
    if (click) {
      click();
    }
  };
  return (
    <>
      <PopOver style={style} toggle={true} mouseTrigger={mouseTrigger}>
        <PopOverTrigger>
          <div className="flex">
            {customIcon
              ? customIcon()
              : icon && (
                  <Iconify
                    fontSize="2rem"
                    icon={icon || "mdi:call-to-action"}
                    className={`iconPrimary `}
                  />
                )}

            {title && title}
          </div>
        </PopOverTrigger>
        <PopOverContent toggleOnContent={toggleOnContent}>
          <Shadow space="0" className="border border-border bg-background">
            <div className="flex flex-col select-none ">
              {contents?.map((content: ContentItem, index: number) => (
                <span
                  key={index}
                  className={twMerge(
                    `w-full px-2 py-1 flex items-center space-x-2 cursor-pointer hover:bg-accent`,
                    ` ${contentClass}`,
                    `${content.className}`
                  )}
                  onClick={() => handleToggle(content?.click)}
                >
                  {content?.icon && (
                    <Iconify fontSize="0.9rem" icon={content.icon} />
                  )}
                  <span className="text-sm">{content[contentId]}</span>
                </span>
              ))}
            </div>
          </Shadow>
        </PopOverContent>
      </PopOver>
    </>
  );
};

export default IconDropdown;
