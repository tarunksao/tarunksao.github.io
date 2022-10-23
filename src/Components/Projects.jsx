import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import SSENSE_APP from '../Images/SSENSE_APP.png';
import { TechStackTags, WorkTypeTags } from './Tags';

export default function Projects() {
	return (
		<>
			<Container maxW={'7xl'} py={10} id='Projects'>
				<Heading fontSize={'30px'}>My Projects</Heading>
				<Box mt={10}>
					<Flex
						borderWidth='1px'
						borderRadius='lg'
						w={{ sm: '250px', md: '500px', lg: 'full' }}
						height={{ sm: '200px', md: '300px', lg: '500px' }}
						direction={{ base: 'column', md: 'row' }}
						// bg={useColorModeValue('white', 'gray.900')}
						boxShadow={'2xl'}
						// justifyContent={'space-evenly'}
						padding={6}
						gap={10}
					>
						<Flex flex={1}>
							<Image
								objectFit='contain'
								_hover={{ objectFit: 'cover' }}
								boxSize='100%'
								src={SSENSE_APP}
								alt='ssense-app'
							/>
						</Flex>
						{/* <Box zIndex='1' width='100%' position='absolute' height='100%'>
							<Box
								bgGradient={useColorModeValue(
									'radial(orange.600 1px, transparent 1px)',
									'radial(orange.300 1px, transparent 1px)'
								)}
								backgroundSize='20px 20px'
								opacity='0.4'
								height='100%'
							/>
						</Box> */}
						<Flex
							flex={1}
							flexDirection='column'
							justifyContent='space-evenly'
							alignItems='flex-start'
							p={1}
							pt={2}
						>
							<WorkTypeTags arr={['Individual', 'E-Commerce']} />
							<TechStackTags
								arr={['ReactJS', 'REST-API', 'Chakra-UI', 'Axios', 'Routing']}
							/>
							<Heading fontSize={'2xl'} fontFamily={'body'}>
								SSENSE Clone
							</Heading>
							<Text
								textAlign={'justify'}
								color={useColorModeValue('gray.700', 'gray.400')}
								px={3}
							>
								<strong>About: -</strong> A clone of a mulit-brand retailer
								based in Montreal, Canada specialising in the sale of designer
								fashion and high end streetwear.
							</Text>

							<Flex
								gap={10}
								mt={6}
								direction={'row'}
								padding={2}
								justifyContent={'space-between'}
								alignItems={'center'}
							>
								<Button
									flex={1}
									fontSize={'sm'}
									rounded={'full'}
									bg={'gray.300'}
									_focus={{
										bg: 'gray.700',
									}}
								>
									<Link
										_hover={{ textDecoration: 'none' }}
										target='_blank'
										href='https://ssense-clone-app.netlify.app/'
									>
										Website
									</Link>
								</Button>
								<Button
									flex={1}
									fontSize={'sm'}
									rounded={'full'}
									bg={'blackAlpha.900'}
									color={'white'}
									boxShadow={
										'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
									}
									_hover={{
										bg: 'blackAlpha.700',
									}}
									_focus={{
										bg: 'blackAlpha.400',
									}}
								>
									<Link
										_hover={{ textDecoration: 'none' }}
										target='_blank'
										href='https://github.com/tarunksao/dandy-religion-8340'
									>
										GitHub
									</Link>
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</>
	);
}
