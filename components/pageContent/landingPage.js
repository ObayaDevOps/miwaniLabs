import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';

import { SlideData } from "../../components/utils/carousel/medoptics-landing-slides"
import ImageSlider from '../../components/utils/carousel/imageSlider'

import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import Hero1 from './hero';
import ThreeFeature from './threeFeatures';
import CallToAction from './callToAction';
import CallToActionBanner from './callToActionBanner';
import TwoPicFeature from './twoPicFeature';
import WithSpeechBubbles from './testimonials';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <Flex>
            //<NextImage src={odurInstallation}  placeholder="blur" />
            <ImageSlider slides={SlideData} />
        </Flex> */}
		
      <Hero1 />
      <ThreeFeature />
      <TwoPicFeature />
      <WithSpeechBubbles />

      {/* <CallToAction />
      <CallToActionBanner /> */}
      {/* <SimpleThreeColumns /> */}
      
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

const Hero = () => {
return (

  <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Cherish the Gift of <br />
              <Text as={'span'} color={'green.400'}>
                Sight
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            Med-Optics is a private company that was established in 2002 to provide a high standard of quality eye care services.
            Over the years,
            we have established ourselves as the leading provider of Optometry and Ophthalmic services in Uganda.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}>
                Get Started
              </Button>
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Learn more
              </Button>
              <Box>
                <Icon
                  as={Arrow}
                  color={useColorModeValue('gray.800', 'gray.300')}
                  w={71}
                  position={'absolute'}
                  right={-71}
                  top={'10px'}
                />
                <Text
                  fontSize={'lg'}
                  fontFamily={'Caveat'}
                  position={'absolute'}
                  right={'-125px'}
                  top={'-15px'}
                  transform={'rotate(10deg)'}>
                  Book an Appointment
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
)
};


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
    
  const SimpleThreeColumns = () => {
      return (
        <Container p={4} centerContent >
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              title={'Computerized Eye Examination'}
              text={
                'See an Optometrist or Ophthalmologist according to your needs. A number of tests are available in order to detect the cause of your discomfort or vision impairment.'
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={'Made-to-measure lenses'}
              text={
                'We manufacture lenses in house and are the exclusive Uganda providers of BBGR lenses, which is a French brand with over 170 years of lens crafting expertise.'
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={'Life long Aftercare'}
              text={
                'We believe that care extends long after you leave the service centre. To ensure the utmost patient satisfaction, adjustments and repairs are free for all our frames!'
              }
            />
          </SimpleGrid>
        </Container>
      );
    }
  