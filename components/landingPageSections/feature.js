import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Center,
    Button,
    HStack,
  } from '@chakra-ui/react';

  import NextImage from 'next/image'
  import Slide1 from '../../public/images/medoptics/Slide-1.png'
  import studio3 from '../../public/images/studio/PaperEgg.png'
  import NextLink from 'next/link'
  

  
  export default function LandingPageSplitWithImage() {
    return (
      <Center p={8}>


        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>Life long Aftercare</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            We believe that care extends long after you leave the service centre.
             To ensure the utmost patient satisfaction, adjustments and repairs are free for all our frames!
            </Text>
            <NextLink href='../../../about/about-us' passHref>
              <Button size="md" color={'green.500'} fontFamily="Arial"> More About Us</Button>
            </NextLink>
          </Stack>
          <Flex>
            <NextImage 
            src='https://res.cloudinary.com/dsjslxmlh/image/upload/v1666785191/Slide-1_evhaub.png' 
            alt="eye glasses fitting"
            width={1349}
            height={550} 
            // placeholder="blur"
            />
            </Flex>

          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>Computerized Eye Examination</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            See an Optometrist or Ophthalmologist according to your needs. A number of tests are available in order to detect
             the cause of your discomfort or vision impairment.
            </Text>
            <NextLink href='../../../studios/kabalagala-studio' passHref>
              <Button  size="md" color={'green.500'} fontFamily="Arial">Book an Eye Test</Button>
            </NextLink>



          </Stack>
          <Flex>
            <NextImage 
            src={Slide1} 
            alt="work by kharumwa"
            width={1349}
            height={550}   
            placeholder="blur"
            />
          </Flex>

          <Stack spacing={4}>
            <Heading as='h3' size='2xl'>Made-to-measure lenses</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
            We manufacture lenses in house and are the exclusive Uganda providers of BBGR lenses,
             which is a French brand with over 170 years of lens crafting expertise.
            </Text>
            <NextLink href='../../../tech/this'>
              <Button size="md" color={'green.500'} fontFamily="Arial">Go to Store</Button>
            </NextLink>
          </Stack>
          <Flex>
          <NextImage src={Slide1} alt="work by kharumwa"  placeholder="blur"/>
          </Flex>
        </SimpleGrid>
       </Center>
    );
  }