import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from '../utils/cloudinaryImageRetreival';



export default function TwoPicFeature(){
  return (
    <Flex
    //   bg="#edf3f8"
    //   _dark={{ bg: "#3e3e3e" }}
    //   p={20}
    //   w="full"
    //   justifyContent="center"
    //   alignItems="center"
    // //   pos="absolute"

    // bg="#edf3f8"
    // _dark={{ bg: "green.900" }}
    p={{ base: 6, lg: 16, xl: 20 }}
    w="auto"
    justifyContent="center"
    alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "green.800" }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="green.900"
              bgGradient='linear(to-r, teal.500, green.500)'
              bgClip="text"

              _dark={{ gGradient:'linear(to-r, teal.200, green.400)',
              bgClip:"text"}}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              What to expect at your eye examination 
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.100" }}
              fontSize={{ md: "lg" }}
                          >
              For some the first eye test may be scary, but don't worry we’ve got you covered! 
              Here’s what happens at an eye examination. First an Optical Assistant will take down your personal details, this is to ascertain if you have any existing medical conditions that you know of
              , and so we'll be able to contact you when your glasses are ready.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="green.900"
              _dark={{ bg: "green.700" }}
              _hover={{ bg: "green.700", _dark: { bg: "green.600" } }}
              color="green.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
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
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="green.900"
              _dark={{ color: "green.400" }}
              lineHeight={{ md: "shorter" }}
            >
              Locations
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.100" }}
              fontSize={{ md: "lg" }}
            >We have 7 service centres across Uganda. 
            Med-Optics Ltd is officially contracted to provide specialized optometry 
            services at the Eye Department of Lubaga Hospital and Case Hospital.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="green.900"
              _dark={{ bg: "green.700" }}
              _hover={{ bg: "green.700", _dark: { bg: "green.600" } }}
              color="green.100"
              as="a"
            >
              Find a Centre
            </Button>
          </Box>
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
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
