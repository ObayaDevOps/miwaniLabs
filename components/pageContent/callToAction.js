import React from "react";
import { chakra, Box, Stack, Image, Flex } from "@chakra-ui/react";
import { getCloudinaryImage, getCloudinaryImageBlur } from '../utils/cloudinaryImageRetreival';



export default function CallToAction(){
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
    //   _light={{ bg: "brand.500" }}
    //   px={8}
    //   py={24}
      mx="auto"

      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={{ base: 6, lg: 16, xl: 20 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color="white"
          _dark={{ color: "gray.100" }}
          mb={6}
        >
          <chakra.span display="block">Ready to dive in?</chakra.span>
          <chakra.span
            display="block"
            color="white"
            _dark={{ color: "gray.500" }}
          >
            Start your free trial today.
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.100"
          _dark={{ color: "gray.300" }}
        >
          Hellonext is a feature voting software where you can allow your users
          to vote on features, publish roadmap, and complete your customer
          feedback loop.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              _light={{ color: "white" }}
              bg="brand.600"
              _dark={{ bg: "brand.500" }}
              _hover={{
                bg: "brand.700",
                _dark: { bg: "brand.600" },
              }}
            >
              Sign up for free
            </chakra.a>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
      <Image
        w="full"
        rounded="lg"
        shadow="2xl"
        src={getCloudinaryImage('Med-Optics-Slide1.png')} 
        alt="Hellonext feedback boards software screenshot"
        width={1349}
        height={550} 
        placeholder="blur"
        blurDataURL={getCloudinaryImageBlur('Med-Optics-Slide1.png')}
      />
      </Box>
    </Flex>
  );
};

