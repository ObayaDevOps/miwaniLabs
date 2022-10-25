import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  
  } from '@chakra-ui/react';

  import Head from 'next/head'
  import NextLink from 'next/link'
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        minH={'100vh'}
        // backgroundImage={'../../../../images/backgrounds/mandelbrot.jpg'        }
        backgroundSize={'fit'}
        backgroundPosition={'center center'}>
        <Head>
        <title>About Us: MedOptics</title>
        <meta name="description" content="Med-Optics Ltd Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
      </Head>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.900, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily={'Arial'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
              paddingTop={useBreakpointValue({base: '10', md: '0'})}
              >
                Med - Optics

                Med-Optics  is a private company that was established in 2002 to provide a high standard of quality eye care services.
                  We have modern equipment and experienced staff to take care of all patients’ needs.

                ​
                </Text>
                <Text color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily={'Arial'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              
                  The Company
                  Over the years, we have grown from a single Optometrist on Buganda road to a team of 50+ strong across 9 service centres.
                  Established to raise the standard of optometry in Uganda, the company continues to be guided by our core values of 
                  Professionalism, Honesty, Quality and Excellence in everything we do.
                ​
                </Text>
                <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontFamily={'Arial'}
                fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
                >
                  Our Mission
                  Med Optics is devoted to improving our client’s vision. 
                  We passionately enhance and protect eye health by providing expertise,
                  accessible services and high-quality products tailored to our client’s needs.
            </Text>
            <Stack 
            direction={'row'}
            paddingBottom={useBreakpointValue({base: '5em', md: '0'})}

            >
              <NextLink href="../about/artists">
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                fontFamily={'Arial'}
                _hover={{ bg: 'whiteAlpha.500' }}
                >
                Show me more
              </Button>
              </NextLink>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }