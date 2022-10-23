import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
	return (
		<Container
			maxW={'full'}
			px={{ base: 10, md: 10, lg: 10 }}
			pt={24}
			id='Home'
		>
			<Flex
				direction={{ base: 'column-reverse', md: 'row' }}
				justifyContent={{ base: 'center', lg: 'space-evenly' }}
				alignItems={{ base: 'center' }}
				gap={10}
			>
				<Box>
					<Heading
						fontSize={{ base: '30px', md: '40px', lg: '50px' }}
						mt={{ base: '0', md: '55px', lg: '80px' }}
						color={'blue.500'}
					>
						Hi, I am Tarun Kumar Sao
					</Heading>
					<Text
						fontSize={{ base: '14px', md: '16px', lg: '20px' }}
						mt={{ base: '10px', md: '25px', lg: '40px' }}
						w={{ base: '250px', md: '350px', lg: '500px' }}
					>
						An Aspiring Full Stack Web Developer, looking forward to utilize my
						skills in order to create or rework on applications, alwyas ready to
						learn and make use of new skillsets, with a mind set of try and fail
						again and again till you suceed.
					</Text>
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
							Resume
						</Link>
					</Button>
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
