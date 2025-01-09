import React, { FC } from "react";

import Iconify from "@/@core/common/icon";
import InputDatePicker from "../../popOver/datePicker/InputDatePicker";

export interface FromToDateFilterTypes {
  fromDate?: Date;
  setFromDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
  toDate?: Date;
  setToDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
const FromToDateFilter: FC<FromToDateFilterTypes> = ({
  fromDate,
  setFromDate = () => {},
  toDate,
  setToDate = () => {},
}) => {
  console.log(toDate);
  return (
    <div className="flex  item-center">
      <div>
        <Iconify
          icon={"uis:calender"}
          fontSize={"1.2em"}
          className="text-center textPrimary"
        />
      </div>
      <InputDatePicker selectedDate={fromDate} setSelectedDate={setFromDate} />
      -
      <InputDatePicker selectedDate={toDate} setSelectedDate={setToDate} />
    </div>
  );
};

export default FromToDateFilter;
