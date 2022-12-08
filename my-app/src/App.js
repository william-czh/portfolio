import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  Heading,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Image, 
  Flex, 
  Button,  
  HStack, 
  chakra,
  Card, 
  CardHeader, 
  SimpleGrid,
  
  CardBody, 
  CardFooter,
  Stack,
  Divider,
  ButtonGroup
} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const colors = {
  brand: {
    900: '#FFFFFF',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Heading as = 'h1' size ='lg'>Rising Bull's Portfolio</Heading>
        <HStack as="nav" spacing="10">
          <Link href='about'>
            <Button variant="nav"> {"About"} </Button>
          </Link>

          <Link href='projects'>
            <Button variant="nav"> {"Projects"} </Button>
          </Link>

        </HStack>
        <HStack>
          <Button>
            {"Contact Me"}
          </Button>

          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
        
      </Flex>
    </chakra.header>
      <Box textAlign="center" fontSize="xl">
      <SimpleGrid minChildWidth='300px' spacing='40px'>
          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Responsive Redesign</Heading>
                <Text>
                  Complete Analysis and Redesign of the Brown CS IPP Website, implementing improved UX and optimized workflows for the intended functionality of the website.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  October 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
                <Button  rightIcon={<ArrowForwardIcon />} variant='solid' colorScheme='gray' >
                  View Details
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>
          
          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>A/B Testing & Eye Tracking</Heading>
                <Text>
                  Through the Figma designs of two bakery pages, analyze the different eye movement of users to compare the efficiency of the different designs.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  October 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
                <Button  rightIcon={<ArrowForwardIcon />} variant='solid' colorScheme='gray' >
                  View Details
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>

          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Iterative Design</Heading>
                <Text>
                  Implementation of YCombinator Startup 'Homeroom' into a High-Fidelity prototype in Figma, undergoing rounds of review and comments with esteemed industry expert Gifford Cheung, Sr. UX Researcher at Nintendo.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  November 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
                <Button  rightIcon={<ArrowForwardIcon />} variant='solid' colorScheme='gray' >
                  View Details
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>

          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Development</Heading>
                <Text>
                  React website made using component library 'Chakra UI' that has complex functionality of sorting, filtering, and 'add to cart'. Website is a niche website for exotic car collectors to choose supercars to be put on showcase on the upcoming autoshows.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  November 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
                <Button  rightIcon={<ArrowForwardIcon />} variant='solid' colorScheme='gray' >
                  View Details
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>


          
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
