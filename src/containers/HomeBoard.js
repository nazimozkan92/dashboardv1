import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import TabsArea from "../components/TabsArea";
import QuickMenu from "../components/QuickMenu";

function HomeBoard() {
  return (
    <div className="boardArea">
      <div className="tabsArea">
        <TabsArea />
      </div>
    </div>
  );
}

export default HomeBoard;
