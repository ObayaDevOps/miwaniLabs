import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from '../utils/cloudinaryImageRetreival';

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'green\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

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

    //for background blur
    // _before={{
    //   content: '""',
    //   position: 'absolute',
    //   zIndex: '-1',
    //   height: 'full',
    //   maxW: '640px',
    //   width: 'full',
    //   filter: 'blur(40px)',
    //   transform: 'scale(0.98)',
    //   backgroundRepeat: 'repeat',
    //   backgroundSize: 'cover',
    //   top: 0,
    //   left: 0,
    //   backgroundImage: backgrounds[0],
    // }}

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
              fontSize={{ base: "4xl", md: "6xl" }}
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
              What to expect at your Eye Examination 
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
            src={getCloudinaryImage('Slide-2.png')} 
            alt="Hellonext feedback boards software screenshot"
            width={1349}
            height={550} 
            placeholder="blur"
            blurDataURL={getCloudinaryImageBlur('Slide-2.png')}
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
