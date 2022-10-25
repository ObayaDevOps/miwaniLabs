import { Heading, Box, Container, Stack, SimpleGrid, Center, Button, AspectRatio, Flex, useColorModeValue, ButtonGroup} from '@chakra-ui/react'
import LandingPageSplitWithImage from '../landingPageSections/feature'
import { SlideData } from "../../components/utils/carousel/medoptics-landing-slides"
import ImageSlider from '../../components/utils/carousel/imageSlider'




export default function LandingPage() {


  return (
    <Box>

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    // py={{ base: 0, md: 0, lg:0 }}
    >

      {/* backgroundImage={'../../../images/visting-artists/acunye/Afropocene-Studio-Acunye-darkened.jpg'}
      Mandelbrot-small.jpg
      recursiveperlinnoise2.png
              <Box minHeight='100vh'  bgPosition="left"  backgroundImage={'../../../images/backgrounds/recursivePerlinNoise.png'}
        <Box minHeight='100vh' bgRepeat="no-repeat" bgSize="100%" bgPosition="fixed"  width="100%" height="auto" backgroundImage={'../../../images/backgrounds/MandelbrotLarge.jpg'}>
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" filter="brightness(60%)" backgroundImage={{base: '../../../images/backgrounds/MandelbrotMedium.jpg', lg:'../../../images/backgrounds/MandelbrotLarge.jpg' }}>

      */}
        {/* <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" backgroundImage={{base: '../../../images/backgrounds/MandelbrotMediumDark.jpg', lg:'../../../images/backgrounds/MandelbrotLargeDark.jpg' }}> */}
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" >
 
        <Flex>
            {/* <NextImage src={odurInstallation}  placeholder="blur" /> */}
            <ImageSlider slides={SlideData} />
        </Flex>


            <Center  >
                <Heading
                 as='h1'
                 size={{base:'2xl', lg:'6xl'}}
                 fontSize={{base:'2xl', lg:'6xl'}}
                textAlign="center"
                 sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                color="white"
                pt={{base: 10, md: 20}}
                // pb={{base: 5}}
                 >
                   Med-Optics
                </Heading>
            </Center>
            <Center >
            <Heading
                 as='h3'
                 size={{base:'lg', lg:'3xl'}}
                 fontSize={{base:'lg', lg:'3xl'}}
                textAlign="center"
                 sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                color="white"
                // pt={{base: 10, md: 20}}
                // pb={{base: 5}}
                 >
                   Cherish The Gift of Sight
                </Heading>
            </Center>

            <Container maxW='md' centerContent     zIndex={1} pt={{base: 6}}>
            <Stack  spacing='6'> 

              <Button
                colorScheme='green'
                color={useColorModeValue('green.50', 'green.900')}
                sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent"
                }}
              >
                Book an Eye Test</Button>

                <Button
                colorScheme='green'
                color={useColorModeValue('green.50', 'green.900')}
                sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent"
                }}
              >
                Find A Treatment Center</Button>
                </Stack>
            </Container>
        </Box>



      <Center p={{sm:1 , md:10}} flex='1'>
        <Heading
          as='h1'
          size='4xl'
          sx={{
            background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          paddingBottom='1em'
          >
            What We Do
          </Heading>
      </Center>

        <LandingPageSplitWithImage />

      </SimpleGrid>
      </Box>
  )
}
