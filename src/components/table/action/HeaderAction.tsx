/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, FC, JSX } from "react";
import {
  ActionMenuList,
  ActionMenuListType,
  ActionStateTypes,
  NewActionMenu,
  NewDropDownMenu,
} from "../tableInterface";
import IconDropdown from "@/components/@cui/dropDown/IconDropdown";
import { actionMenuContents, filterActionMenuCondition } from "./function";
import Drawer from "@/components/@cui/drawer/Drawer";

interface TableHeaderActionType {
  actionMenuList: ActionMenuListType;
  selectedRows: Record<string, unknown>[];
  setSelectedRows: (rows: Record<string, any>[]) => void;
  newActionMenu?: ({}) => NewActionMenu[];
}
const TableHeaderAction: FC<TableHeaderActionType> = ({
  actionMenuList,
  selectedRows,
  setSelectedRows,
  newActionMenu,
}) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [drawerContent, setDrawerContent] = useState<ActionStateTypes>({
    Component: <></>,
    title: "",
    multiSelected: false,
  });

  const toggleDrawer = (toggle?: boolean) => {
    setDrawerToggle(toggle ? toggle : !drawerToggle);
  };

  const handleActionMenuContents: any = (
    listCondition: ActionMenuList[] | undefined
  ) => {
    return actionMenuContents(
      listCondition,
      selectedRows,
      setSelectedRows,
      toggleDrawer,
      setDrawerContent
    );
  };
  //new Action Menu
  const newActionMenuRender = (
    actionMenu: NewDropDownMenu[]
  ): JSX.Element[] | any => {
    return actionMenu.map((menu, index) => {
      const contents = menu.contents({});
      const listCondition = filterActionMenuCondition(contents, selectedRows);
      return (
        listCondition &&
        listCondition.length > 0 && (
          <div key={index}>
            <IconDropdown
              mouseTrigger={true}
              icon={menu.icon}
              contents={handleActionMenuContents(listCondition)}
              style="dropdown"
            />
          </div>
        )
      );
    });
  };

  // main action
  const mainActionMenu = actionMenuList({});
  const menuListCondition = filterActionMenuCondition(
    mainActionMenu,
    selectedRows
  );
  const singleIconAction = (icon: string, action: ({}) => JSX.Element) => {
    return (
      <div>
        <div>
          {action({
            icon,
          })}
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="flex items-center relative">
          {menuListCondition && menuListCondition.length > 0 && (
            <IconDropdown
              mouseTrigger={true}
              icon="mdi:call-to-action"
              contents={handleActionMenuContents(menuListCondition)}
              style="dropdown"
            />
          )}
          {newActionMenu &&
            newActionMenu({}).map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.action && item.icon
                    ? singleIconAction(item.icon, item.action)
                    : item.dropdownMenu
                    ? newActionMenuRender(item.dropdownMenu)
                    : null}
                </React.Fragment>
              );
            })}
        </div>
      </div>
      <Drawer
        open={drawerToggle}
        close={toggleDrawer}
        title={drawerContent.title}
      ></Drawer>
    </>
  );
};

export default TableHeaderAction;
