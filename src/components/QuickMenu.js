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
      tabId: 3,
      label: "Yazı Ekle",
      content: "0",
    });
  };

  const updatePost = () => {
    setTabData({
      tabId: 9,
      label: "Yazı Ekle",
      content: "0",
    });
  };

  const listPosts = () => {
    setTabData({
      tabId: 2,
      label: "Yazılar",
      content: "0",
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
      </MenuList>
    </Menu>
  );
}

export default QuickMenu;
