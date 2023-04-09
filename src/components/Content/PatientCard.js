import { Heading } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default () => {
  return (
    <Box p={8} borderRadius="3xl" bg="#5D4E7B" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        Patient Details Card
      </Text>
      <Heading mt={6}>firstName lastName</Heading>
      <Text fontSize="sm" textColor="gray.200" mt={1}>
        Province/State, Country
      </Text>
      <Text fontSize="m" textColor="gray.200" mt={1} fontWeight="bold">
        Daily Streak: 6 &#128293;
      </Text>
    </Box>
  );
};
