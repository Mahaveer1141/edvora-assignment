import {
  Icon,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Select,
} from "@chakra-ui/react";
import styles from "../../styles/Body.module.css";
import CustomTab from "./CustomTab";
import { BsFilterLeft } from "react-icons/bs";
import BodyItem from "./BodyItem";
import { MdArrowDropDown } from "react-icons/md";

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
            <Popover>
              <PopoverTrigger>
                <span>Filters</span>
              </PopoverTrigger>
              <PopoverContent w="200px" p="10px 30px 10px 30px" bg="#131313">
                <PopoverHeader color="#A5A5A5">Filters</PopoverHeader>
                <PopoverBody p={0}>
                  <Select
                    icon={<MdArrowDropDown />}
                    mt="10px"
                    bg="#232323"
                    variant="filled"
                    placeholder="State"
                  >
                    <option>Rajsthan</option>
                    <option>Haryana</option>
                    <option>Punjab</option>
                  </Select>
                  <Select
                    icon={<MdArrowDropDown />}
                    mt="10px"
                    bg="#232323"
                    variant="filled"
                    placeholder="City"
                  >
                    <option>Jaipur</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                  </Select>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </TabList>
        <TabPanels mt="24px" color="#fff">
          <TabPanel p={0}>
            <BodyItem />
            <BodyItem />
            <BodyItem />
            <BodyItem />
            <BodyItem />
            <BodyItem />
          </TabPanel>
          <TabPanel p={0}>
            <BodyItem />
          </TabPanel>
          <TabPanel p={0}>
            <BodyItem />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Body;
