import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<Container
			maxW={'full'}
			px={{ base: 10, md: 10, lg: 10 }}
			pt={24}
			id='Home'
			minH={'700px'}
		>
			<Flex
				direction={{ base: 'column-reverse', md: 'row' }}
				justifyContent={{ base: 'center', lg: 'space-evenly' }}
				alignItems={{ base: 'center' }}
				gap={10}
			>
				<Box>
					<Heading
						fontSize={{ base: '20px', md: '25px', lg: '30px' }}
						mt={{ base: '0', md: '40px', lg: '60px' }}
						mb={1}
						color={'blue.500'}
					>
						Hi !!!!!,
					</Heading>
					<Flex alignItems={'end'} gap={4}>
						<Heading
							fontSize={{ base: '20px', md: '25px', lg: '30px' }}
							mb={1}
							color={'blue.500'}
						>
							I am
						</Heading>
						<Heading
							fontSize={{ base: '30px', md: '40px', lg: '50px' }}
							color={'blue.500'}
						>
							Tarun Kumar Sao
						</Heading>
					</Flex>
					{/* <Text
						fontSize={{ base: '14px', md: '16px', lg: '20px' }}
						mt={{ base: '10px', md: '25px', lg: '40px' }}
						w={{ base: '250px', md: '350px', lg: '500px' }}
					>
						An Aspiring Full Stack Web Developer, looking forward to utilize my
						skills in order to create or rework on applications, alwyas ready to
						learn and make use of new skillsets, with a mind set of try and fail
						again and again till you suceed.
					</Text> */}
					<Flex gap={2} mt={6}>
						<Button
							variant={'solid'}
							colorScheme='blue'
							mt={4}
							borderRadius={'full'}
						>
							<Link
								_hover={{ textDecoration: 'none' }}
								target='_blank'
								href='https://drive.google.com/file/d/1FWONF3UHX3-f3Gd7DGkLCDQYl8k3aFhW/view?usp=sharing'
							>
								My Resume
							</Link>
						</Button>
						<Box mt={4}>
							<Link
								_hover={{ textDecoration: 'none' }}
								target='_blank'
								href='https://github.com/tarunksao'
							>
								<Icon as={FaGithub} w={10} h={10} />
							</Link>
						</Box>
						<Box mt={4}>
							<Link
								target='_blank'
								href='https://www.linkedin.com/in/tarun-kumar-sao-3289181a5/'
							>
								<Icon as={FaLinkedin} w={10} h={10} color='blue.600' />
							</Link>
						</Box>
					</Flex>
					{/* <Flex>
							<FaGithub />
						</Flex> */}
				</Box>
				<Box>
					<Image
						src='https://avatars.githubusercontent.com/u/107460801?v=4'
						alt='myImage'
						borderRadius={'full'}
						w={{ base: '150px', md: '250px', lg: '400px' }}
					/>
				</Box>
			</Flex>
		</Container>
	);
}
