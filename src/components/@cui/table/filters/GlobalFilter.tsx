import React, { ChangeEvent } from "react";
import TextField from "@/components/textField/TextField";
import Iconify from "@/@core/common/icon";
export interface GlobalFilterType {
  setGlobalFilter?: (value: string) => void;
}
const GlobalFilter = ({ setGlobalFilter }: GlobalFilterType) => {
  const handleGlobalFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (setGlobalFilter) {
      setGlobalFilter(value);
    }
  };
  const prefix = () => <Iconify icon="material-symbols-light:search" />;
  return <TextField onChange={handleGlobalFilter} prefix={prefix} />;
};

export default GlobalFilter;
