import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import CakeFlavorPanel from "../components/CakeFlavorPanel";
import CakeTypePanel from "../components/CakeTypePanel";
import DecorationPanel from "../components/DecorationPanel";
import FrostingPanel from "../components/FrostingPanel";

const Order = () => {
  return (
    <Box w={["100vw", "100vw", "80vw"]} mx="auto">
      <Tabs isFitted variant="line">
        <TabList mb="1em">
          <Tab>Type</Tab>
          <Tab>Flavor</Tab>
          <Tab>Frosting</Tab>
          <Tab>Decoration</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CakeTypePanel />
          </TabPanel>
          <TabPanel>
            <CakeFlavorPanel />
          </TabPanel>
          <TabPanel>
            <FrostingPanel />
          </TabPanel>
          <TabPanel>
            <DecorationPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Order;
