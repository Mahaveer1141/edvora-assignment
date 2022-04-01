import { Icon, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import styles from "../../styles/Body.module.css";
import CustomTab from "./CustomTab";
import { BsFilterLeft } from "react-icons/bs";

function Body() {
  return (
    <div className={styles.bodymain}>
      <Tabs>
        <TabList color="#d0cbcb" borderBottom="none">
          <CustomTab title="Nearest Rides" />
          <CustomTab title="Upcoming Rides (6)" />
          <CustomTab title="Past Rides (3)" />
          <div className={styles.filter}>
            <Icon mr="8px" as={BsFilterLeft} />
            <span>Filters</span>
          </div>
        </TabList>
        <TabPanels mt="24px" color="#fff">
          <TabPanel p={0}>First</TabPanel>
          <TabPanel p={0}>Seocnd</TabPanel>
          <TabPanel p={0}>Third</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Body;
