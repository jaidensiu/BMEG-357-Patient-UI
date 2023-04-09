import { IconButton } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiPlus } from "react-icons/fi";
import PatientCard from "./components/Content/PatientCard";
import TreatmentHistory from "./components/Content/TreatmentHistory";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Usage from "./components/Usage";

function App() {
  return (
    <Box>
      <Header />
      <SimpleGrid columns={8} gap={3}>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={5} gap={8}>
            <GridItem colSpan={5}>
              <PatientCard />
            </GridItem>
            <GridItem colSpan={5}>
              <Usage />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={10} gap={3} mt={12}>
        <GridItem colSpan={2}>
          <Center>
            <IconButton
              bg="#5C4E7A"
              textColor="white"
              position="fixed"
              bottom={12}
              size="lg"
              icon={<FiPlus />}
            />
          </Center>
        </GridItem>
        <GridItem colSpan={6}>
          <TreatmentHistory />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default App;
