import React, { FC } from "react";

import IconDropdown from "../../dropDown/IconDropdown";
import { ColumnType, ColumnKey } from "@/components/table/tableInterface";

import DragDropArray from "../../draggable/DragDropArray";
import { ClassNameType } from "@/utils/interfaces/commonTypes";

export interface ColumnHideShowType {
  showOnlyColumns?: ColumnType[];
  setShowOnlyColumns?: React.Dispatch<React.SetStateAction<ColumnType[]>>;
}
interface Props extends ColumnHideShowType {
  allColumns: ColumnType[];
  columnKey?: ColumnKey;
}
const ColumnHideShow: FC<Props> = ({
  showOnlyColumns,
  setShowOnlyColumns,
  allColumns,
  columnKey = "title",
}) => {
  const handleHideShows = (item: ColumnType) => {
    if (setShowOnlyColumns) {
      // Find the index of the column in `allColumns`
      const indexInAllColumns = allColumns.findIndex(
        (v) => v[columnKey] === item[columnKey]
      );

      if (showOnlyColumns?.some((v) => v[columnKey] === item[columnKey])) {
        // Remove the item if it is already included
        setShowOnlyColumns((prev) =>
          prev.filter((v) => v[columnKey] !== item[columnKey])
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

  const ContentDiv = ({
    column,
    className,
  }: {
    column: ColumnType;
    className?: ClassNameType;
  }) => (
    <span
      className={`w-full px-2 py-1 flex items-center space-x-2 cursor-pointer hover:bg-accent  ${className}`}
      onClick={() => handleHideShows(column)}
    >
      <span className="text-sm">{column[columnKey]}</span>
    </span>
  );

  return (
    <div>
      <IconDropdown
        icon={"mingcute:column-fill"}
        style="dropdown"
        mouseTrigger={true}
        toggleOnContent={false}
      >
        <DragDropArray
          setItems={setShowOnlyColumns}
          items={showOnlyColumns}
          renderItem={(column, index) => (
            <span key={index}>
              {ContentDiv({
                column,
                className: "bg-effect-2xl hover:bg-yellow-600",
              })}
            </span>
          )}
        />
        {allColumns
          .filter(
            (item) =>
              !showOnlyColumns?.some((column) => column.title === item.title)
          )
          ?.map((item, index) => (
            <span key={index}>{ContentDiv({ column: item })}</span>
          ))}
      </IconDropdown>
    </div>
  );
};

export default ColumnHideShow;
