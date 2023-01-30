import React, { useState, useRef } from "react";
import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CloseIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";

import Dashboard from "../pages/Dashboard";
import AddNewPost from "../pages/AddNewPost";
import ComingSoon from "../pages/ComingSoon";

function TabsArea() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const defaultName = "New Tab";
  const [tabs, setTabs] = useState([
    {
      tabId: 0,
      label: "Dashboard",
    },
  ]);
  const [activeTabId, setActiveTabId] = useState(0);

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...tabs];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTabs(copyListItems);
  };

  const addNewTabItem = (type) => {
    let data = type[0];
    console.log("gelen array", data.tabId);
    const checkArray = tabs.find((item) => item.tabId == data.tabId);
    console.log("array kontrol", checkArray);

    if (!checkArray) {
      const newTab = tabs.concat({
        tabId: data.tabId,
        label: data.label,
      });
      setTabs(newTab);
      setActiveTabId(data.tabId);
    } else {
      setActiveTabId(data.tabId);
      console.log("tab zaten var");
    }
  };

  const removeTabItem = (e) => {
    if (window.confirm("Are you sure to close this tab?")) {
      const currentTabId = e.currentTarget.value;
      const getIndexOfCurrent = tabs.findIndex(
        (item) => item.tabId == currentTabId
      );
      if (tabs.length > 1) {
        console.log("tab içeriğine bak");
        const previousTab = getIndexOfCurrent - 1;
        const previousItem = tabs[previousTab];

        if (previousItem != null) {
          const previousId = previousItem.tabId;
          console.log(previousId, "önceki id");
          setActiveTabId(previousId);
        } else {
          const nextTab = getIndexOfCurrent + 1;
          const netxtItem = tabs[nextTab];
          const nextId = netxtItem.tabId;
          setActiveTabId(nextId);
        }
        setTabs((current) =>
          current.filter((items) => {
            return items.tabId != currentTabId;
          })
        );
      } else {
        addNewTabItem();
        setTabs((current) =>
          current.filter((items) => {
            return items.tabId != currentTabId;
          })
        );
      }
    }
  };

  console.log("aktif tab id", tabs);

  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList className="tabButtonArea">
          {tabs.map((item, index) => (
            <Tab
              key={index}
              className="tabButton"
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              isSelected={true}
            >
              <CalendarIcon className="tabButtonIcon" />
              {item.label}
              <Button
                className="tabCloseButton"
                colorScheme="teal"
                variant="ghost"
                value={item.tabId}
                onClick={removeTabItem}
              >
                <CloseIcon className="tabButtonIcon" />
              </Button>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((item, index) => (
            <TabPanel key={index}>
              {item.tabId == 0 ? (
                <Dashboard />
              ) : item.tabId == 1 ? (
                <AddNewPost />
              ) : (
                <ComingSoon />
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Sidebar addNewTabItem={addNewTabItem} className="sidebarArea" />
    </>
  );
}

export default TabsArea;
