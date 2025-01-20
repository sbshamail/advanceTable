import React, { FC } from "react";
import IconDropdown, { ContentItem } from "../../dropDown/IconDropdown";
import { ColumnType, ColumnKey } from "@/components/table/tableInterface";

export interface ColumnHideShowType {
  showOnlyColumns?: ColumnType[];
  setShowOnlyColumns?: React.Dispatch<React.SetStateAction<ColumnType[]>>;
}
interface Props extends ColumnHideShowType {
  allColumns: ColumnType[];
  itemKey?: ColumnKey;
}
const ColumnHideShow: FC<Props> = ({
  showOnlyColumns,
  setShowOnlyColumns,
  allColumns,
  itemKey = "title",
}) => {
  const handleHideShows = (item: ColumnType) => {
    if (setShowOnlyColumns) {
      // Find the index of the column in `allColumns`
      const indexInAllColumns = allColumns.findIndex(
        (v) => v[itemKey] === item[itemKey]
      );

      if (showOnlyColumns?.some((v) => v[itemKey] === item[itemKey])) {
        // Remove the item if it is already included
        setShowOnlyColumns((prev) =>
          prev.filter((v) => v[itemKey] !== item[itemKey])
        );
      } else {
        // Add the item if it is not included
        setShowOnlyColumns((prev) => {
          // Create a new array where we maintain the order of `allColumns`
          const updated = [...prev];
          updated.splice(indexInAllColumns, 0, item); // Insert the item at the correct index
          return updated;
        });
      }
    }
  };

  const contents: ContentItem[] = allColumns
    .filter((column) => column[itemKey])
    .map((column) => ({
      title: column.title,
      click: () => handleHideShows(column),
      className: `  ${
        showOnlyColumns?.some((v) => v[itemKey] === column[itemKey])
          ? "bg-effect-2xl hover:bg-yellow-600"
          : ""
      }`,
    }));
  return (
    <div>
      <IconDropdown
        contents={contents}
        icon={"mingcute:column-fill"}
        style="dropdown"
        mouseTrigger={true}
        toggleOnContent={false}
      />
    </div>
  );
};

export default ColumnHideShow;
