import React, { useState, useEffect, useRef } from "react";
import { useNewTab } from "../context/NewTabContext";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, CalendarIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import QuickMenu from "./QuickMenu";
import Dashboard from "../pages/Dashboard";
import AddNewPost from "../pages/AddNewPost";
import ComingSoon from "../pages/ComingSoon";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

function TabsArea() {
  const { tabData } = useNewTab();
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [tabIndex, setTabIndex] = useState(0);
  const [tabs, setTabs] = useState([
    {
      tabId: 0,
      label: "Dashboard",
    },
  ]);

  useEffect(() => {
    if (tabData.length != 0) {
      addNewTabItem(tabData);
    }
  }, [tabData]);

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

  const addNewTabItem = (tabData) => {
    const checkArray = tabs.find((item) => item.tabId == tabData.tabId);
    const getIndexOfCurrent = tabs.findIndex(
      (item) => item.tabId == tabData.tabId
    );
    if (!checkArray) {
      const newTab = tabs.concat({
        tabId: tabData.tabId,
        label: tabData.label,
        content: tabData.content,
      });
      setTabs(newTab);
      setTabIndex(tabIndex + 1);
    } else {
      setTabIndex(getIndexOfCurrent);
    }

    console.log(tabIndex);
    console.log(tabs);
  };

  const removeTabItem = (e) => {
    if (window.confirm("Are you sure to close this tab?")) {
      const currentTabId = e.currentTarget.value;
      const getIndexOfCurrent = tabs.findIndex(
        (item) => item.tabId == currentTabId
      );
      const previousTab = getIndexOfCurrent - 1;
      const nextTab = getIndexOfCurrent + 1;
      if (previousTab != null) {
        setTabIndex(previousTab);
      } else {
        setTabIndex(nextTab);
      }
      setTabs((current) =>
        current.filter((items) => {
          return items.tabId != currentTabId;
        })
      );
    }
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        size="md"
        variant="enclosed"
      >
        <TabList className="tabBtnArea">
          {tabs.map((item, index) => (
            <>
              <Tab
                key={index}
                className="tabBtn"
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
              >
                <div className="tabBtnLeft">
                  <CalendarIcon className="tabBtnIcon" />
                  {item.label.length > 20
                    ? item.label.substring(0, 20) + "..."
                    : item.label}
                </div>
                {item.tabId != 0 ? (
                  <div className="tabBtnRight">
                    <IconButton
                      className="tabCloseBtn"
                      size="xs"
                      colorScheme="teal"
                      variant="ghost"
                      value={item.tabId}
                      onClick={removeTabItem}
                    >
                      <CloseIcon className="tabCloseBtn" />
                    </IconButton>
                  </div>
                ) : (
                  <div className="d-none"></div>
                )}
              </Tab>
              <Divider
                orientation="vertical"
                colorScheme="teal"
                className="tabDivider"
              />
            </>
          ))}
          <QuickMenu addNewTabItem={addNewTabItem} />
        </TabList>
        <TabPanels>
          {tabs.map((item, index) => (
            <TabPanel key={index} className="tabPanelArea">
              {item.tabId == 0 ? (
                <Dashboard />
              ) : item.tabId == 1 ? (
                <AddNewPost />
              ) : item.tabId == 2 ? (
                <Posts />
              ) : tabs.filter((tab) => tab.tabId == tabData.tabId) ? (
                <Post postId={item.content} />
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
