import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';



const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (

    
    <Container maxW={'5xl'} py={12}>
      <Head>
        <title>About Us | MiwaniLabs Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/MiwaniLens.png"></link>
      </Head>
      <Heading
       as={'h1'}
        mb={6}
        fontSize={{
          base: "6xl",
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
         {" "}
        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, blue.500, blue.300)'
          fontWeight="extrabold"
        >
          Who We Are
        </Text>{" "}
        
      </Heading>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A Modern Lens Manufacturer</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
        Welcome to MiwaniLabs! We are a leading manufacturer of high-quality lenses for a variety of applications. With over 20 years of experience in the industry, we have developed a reputation for producing lenses that are durable, reliable, and capable of delivering crystal-clear images.

          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'9 Service Centres'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'blue.500'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text={'20 Years of Service'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'100,000 patients served'}
            />
                        <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'200+ Outreaches Conducted'}
            />
          </Stack>
        </Stack>
        <Flex>
        <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={getCloudinaryImage('anguyo.jpg')} 
            alt="Hellonext feedback boards software screenshot"
            width={1349}
            height={550} 
            placeholder="blur"
            blurDataURL={getCloudinaryImageBlur('anguyo.jpg')}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}