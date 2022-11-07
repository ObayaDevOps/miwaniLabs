import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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

const AccordionDropper = () => {
  return (
  <Accordion defaultIndex={[0]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How much is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Consultation fee is 20,000 UGX, however if you want to take your 
      prescription away from the practice we charge 50,000 UGX.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      A normal consultation will not exceed 20 mins,
       however more complicated eye defects which require more investigation may lengthen the  examination time to 30 mins.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long will it take me to get my glasses ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      If you are ordering lenses we have in stock your glasses can be ready same day if ordered before 11am.
       Overseas orders can take up to 2 weeks.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How Do I order an outreach ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Please send an email to info@medopticsltd.com detailing the proposed date,
       venue and expected number of people.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>);
}

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

    
    <Container maxW={{base: '1xl', md:'6xl'}} py={12}>
      <Head>
        <title>Frequently Asked Questions | MedOptics Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
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
        color="green.900"
        _dark={{
          color: "green.100",
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
          bgGradient='linear(to-r, green.500, green.300)'
          fontWeight="extrabold"
        >
          Frequently Asked Questions
        </Text>{" "}
        
      </Heading>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={10}>
        <Stack spacing={4}>
          <Text color={'gray.500'} fontSize={'lg'}>
          If you’re new to MedOptics or looking to learn more about Optometry,
           this guide will help you learn more about the our website, its features and our Services.
          </Text>
        </Stack>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Stack spacing={4}>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            {/* Each tab is n accordion */}
            <Tab>Services</Tab> 
            <Tab>Education</Tab>
            <Tab>Buying</Tab>
            <Tab>Delivery and Returns</Tab>
            <Tab>Privacy & Policy</Tab>

          </TabList>

          <TabPanels>
            <TabPanel>
              <AccordionDropper />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}