import React, { FC } from "react";
import IconDropdown, {
  ContentItem,
  ContentList,
  ContentListType,
  Props,
} from "./IconDropdown";
import {
  DraggableSwapy,
  DraggableSwapyContent,
} from "../draggable/DraggableSwapy";
import { ClassNameType } from "@/utils/interfaces/commonTypes";

interface DraggableDropdownType extends Props {
  contents: ContentItem[];
  contentId?: string; //use for key title in contents,
  contentClass?: ClassNameType;
}
const DraggableDropdown: FC<DraggableDropdownType> = ({
  contents,
  contentClass,
  contentId,
  ...props
}) => {
  const [contentss, setContents] = React.useState(contents);
  console.log(contentss);
  return (
    <IconDropdown {...props}>
      <DraggableSwapy setContents={setContents}>
        {contentss.map((item, index) => (
          <DraggableSwapyContent key={index} swapyKey={item.title}>
            <ContentList
              content={item}
              key={index}
              contentClass={contentClass}
              contentId={contentId}
            />
          </DraggableSwapyContent>
        ))}
      </DraggableSwapy>
    </IconDropdown>
  );
};

export default DraggableDropdown;
