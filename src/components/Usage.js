import { Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default () => {
  const Usage = ({
    icon,
    title,
    usage,
    color1,
  }) => (
    <Box>
      <Flex alignItems="center">
        <Box
          borderRadius="lg"
          fontSize="xl"
          p={3}
          bg={color1}
        >
          {icon}
        </Box>
        <Box ml={2}>
          <Heading fontSize="md">{title}</Heading>
        </Box>
        <Spacer />
        <Box textAlign="right">
          <Text fontSize="16" fontWeight="semibold">
            {usage}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box ml={6} mr={4}>
      <Flex mb={4} textColor="gray.400" fontSize="sm">
        <Text>Date</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          Usage
        </Text>
      </Flex>
      <Stack>
        <Usage
          title="April 7, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 6, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 5, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 4, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 3, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 2, 2023"
          icon={null}
          usage="2"
          color1="#E0F8F2"
        />
        <Usage
          title="April 1, 2023"
          icon={null}
          usage="1"
          color1="#FFECE8"
        />
      </Stack>
    </Box>
  );
};
