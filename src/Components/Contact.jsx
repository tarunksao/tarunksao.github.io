import { Container, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
	return (
		<>
			<Container maxW={'7xl'} p={10} id='Contact Me'>
				<Heading color={'blue.500'}>Contact Me</Heading>
				<Flex
					gap={10}
					mt={10}
					direction={{ base: 'column', md: 'column', lg: 'row' }}
				>
					<Text>
						<Icon as={FaPhone} mr={2} color='green.300' fontSize='20px' /> +91
						9630529348
					</Text>
					<Text>
						<Icon as={FaEnvelope} mr={2} color='red.400' fontSize='20px' />{' '}
						tarun.k.sao@gmail.com
					</Text>
					<Text>
						<Icon as={FaLinkedin} mr={2} color='blue.500' fontSize='20px' />{' '}
						<Link
							_hover={{ textDecoration: 'none' }}
							target='_blank'
							href='https://www.linkedin.com/in/tarun-kumar-sao-3289181a5/'
						>
							LinkedIn
						</Link>
					</Text>
					<Text>
						<Icon as={FaGithub} mr={2} color='blackAlpha.800' fontSize='20px' />{' '}
						<Link
							_hover={{ textDecoration: 'none' }}
							target='_blank'
							href='https://github.com/tarunksao'
						>
							GitHub
						</Link>
					</Text>
				</Flex>
			</Container>
		</>
	);
}
