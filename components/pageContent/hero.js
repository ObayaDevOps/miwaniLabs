import {
    Box,
    Text,
    Button,
    Stack,
    Icon,
    Heading,
    chakra
  } from '@chakra-ui/react';

  import Image from 'next/image';
  import ImageSlider from '../utils/carousel/imageSlider';
  import NextLink from 'next/link';



  export default function Hero() {
    return (

    <Box px={8} py={24} mx="auto" minHeight="100vh">
    <Box
      w={{
        base: "full",
        md: 11 / 12,
        xl: 9 / 12,
      }}
      mx="auto"
      textAlign={{
        base: "left",
        md: "center",
      }}
    >
      <Heading
      as={'h1'}
        mb={6}
        fontSize={{
          base: "5xl",
          md: "8xl",
        }}
        minHeight={'1vh'}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        color="blue.900"
        _dark={{
          color: "blue.100",
        }}
      >
        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, blue.600, blue.100)'
          fontWeight="extrabold"
          fontFamily="Space Mono"
        >
          Miwani Labs
        </Text>{" "}

        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, blue.600, blue.100)'
          fontWeight="bold"
          fontFamily="Space Mono"
        >
          Coming Soon...
        </Text>{" "}
      </Heading>
    </Box>
    <Box
      w={{
        base: "full",
        md: 10 / 12,
      }}
      mx="auto"
      mt={20}
      textAlign="center"
    >

      {/* <ImageSlider /> */}

    </Box>
  </Box>
    )
}
