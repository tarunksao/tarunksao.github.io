import { Container, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
	return (
		<>
			<Container maxW={'7xl'} p={10} id='Contact' minH={'400px'}>
				<Heading color={'blue.500'}>Contact Me</Heading>
				<Flex gap={10} mt={10}>
					<Text>
						<Icon as={FaPhone} mr={2} color='green.300' fontSize='20px' /> +91
						9630529348
					</Text>
					<Text>
						<Icon as={FaEnvelope} mr={2} color='red.400' fontSize='20px' />{' '}
						tarun.k.sao@gmail.com
					</Text>
				</Flex>
			</Container>
		</>
	);
}
