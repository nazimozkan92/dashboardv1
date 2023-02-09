import React from "react";
import { useNewTab } from "../context/NewTabContext";

import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

function QuickMenu() {
  const { setTabData } = useNewTab();

  const addNewPost = () => {
    setTabData({
      tabId: 1,
      label: "Yazı Ekle",
    });
  };

  const listPosts = () => {
    setTabData({
      tabId: 2,
      label: "Yazılar",
    });
  };
  
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<AddIcon />}
        variant="ghost"
        colorScheme="teal"
        className="quickMenuBtn"
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T" onClick={addNewPost}>
          Yazı Ekle
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="⌘N" onClick={listPosts}>
          Yazılar
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default QuickMenu;
