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
  Spinner,
} from "@chakra-ui/react";
import styles from "../../styles/Body.module.css";
import CustomTab from "./CustomTab";
import { BsFilterLeft } from "react-icons/bs";
import BodyItem from "./BodyItem";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  getDistance,
  getPastRides,
  getUpcomingRides,
  sortedRides,
} from "../util";

function Body({ userStationCode }) {
  const [rides, setRides] = useState();

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://assessment.api.vweb.app/rides")
      ).json();
      setRides(sortedRides(response, userStationCode));
    })();
  }, []);

  if (rides === undefined) {
    return (
      <div className={styles.loader}>
        <Spinner color="white" />;
      </div>
    );
  }

  const upcoming = getUpcomingRides(rides, userStationCode);
  const past = getPastRides(rides, userStationCode);

  return (
    <div className={styles.bodymain}>
      <Tabs>
        <TabList color="#d0cbcb" borderBottom="none">
          <CustomTab title="Nearest Rides" />
          <CustomTab title={`Upcoming Rides (${upcoming.length})`} />
          <CustomTab title={`Past Rides (${past.length})`} />
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
            {rides.map((ride, key) => (
              <div key={key}>
                <BodyItem ride={ride} />
              </div>
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {upcoming.map((ride, key) => (
              <div key={key}>
                <BodyItem ride={ride} />
              </div>
            ))}
          </TabPanel>
          <TabPanel p={0}>
            {past.map((ride, key) => (
              <div key={key}>
                <BodyItem ride={ride} />
              </div>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Body;
