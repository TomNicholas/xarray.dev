import React from "react"
import {
  Flex,
  Container,
  Text,
  Stack,
  Heading,
  AspectRatio,
  Button,
  Link,
} from "@chakra-ui/react"
export const HeroBannerSection = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              xarray
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              N-D labeled arrays and datasets in Python
            </Text>
          </Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            <strong>xarray</strong> (formerly <strong>xray</strong>) is an open
            source project and Python package that introduces labels in the form
            of dimensions, coordinates, and attributes on top of raw NumPy-like
            arrays, which allows for more intuitive, more concise, and less
            error-prone user experience.
            <br />
            <br />
            xarray includes a large and growing library of domain-agnostic
            functions for advanced analytics and visualization with these data
            structures.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              <Link href="https://xarray.pydata.org/en/stable/getting-started-guide/quick-overview.html">
                Get Started
              </Link>
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              <Link href="https://xarray.pydata.org/en/stable/getting-started-guide/why-xarray.html">
                Why xarray?
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <AspectRatio flex="1 1 auto">
            <iframe
              src="https://www.youtube.com/embed/X0pAhJgySxk"
              title="xarray presentation @ SciPy 2015"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </AspectRatio>
        </Flex>
      </Stack>
    </Container>
  )
}