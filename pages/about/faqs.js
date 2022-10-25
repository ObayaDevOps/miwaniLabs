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
        <title>Frequently Asked Questions</title>
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
              fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}
              paddingTop={useBreakpointValue({base: '10', md: '0'})}
              >
                Frequently Asked Questions
                ​
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