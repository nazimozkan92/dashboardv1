import React, { useRef } from "react";
import { useNewTab } from "../context/NewTabContext";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  Divider,
  MenuList,
  MenuItem,
  Menu,
  AccordionItem,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

function Sidebar() {
  const { setTabData } = useNewTab();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openRef = useRef();

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
    <>
      <Button
        ref={openRef}
        colorScheme="teal"
        variant="ghost"
        onClick={onOpen}
        className="menuOpenButton"
      >
        <ChevronRightIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={openRef}
      >
        <DrawerOverlay />
        <DrawerContent className="sidebarModal">
          <DrawerHeader className="sidebarHeader">
            IT Blog
            <DrawerCloseButton />
          </DrawerHeader>
          <Divider />
          <DrawerBody className="sidebarBody">
            <Accordion allowMultiple className="sidebarAccordion">
              <AccordionItem>
                <AccordionButton
                  _expanded={{ bg: "teal", color: "white" }}
                  className="sidebarAccordionButton"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Yazılar
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Menu>
                    <MenuItem
                      icon={<AddIcon fontSize="10px" />}
                      onClick={addNewPost}
                      className="sidebarMenuItem"
                    >
                      Yazı ekle
                    </MenuItem>
                    <MenuItem
                      icon={<HamburgerIcon fontSize="10px" />}
                      onClick={listPosts}
                      className="sidebarMenuItem"
                    >
                      Yazılar
                    </MenuItem>
                  </Menu>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  _expanded={{ bg: "teal", color: "white" }}
                  className="sidebarAccordionButton"
                >
                  <Box as="span" flex="1" textAlign="left">
                    Yorumlar
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Menu>
                    <MenuItem
                      icon={<HamburgerIcon fontSize="10px" />}
                      className="sidebarMenuItem"
                    >
                      Yorumları Listele
                    </MenuItem>
                  </Menu>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
          <DrawerFooter className="sidebarFooter"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
