import { Container, Heading, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<Container maxW={'7xl'} p={10} id='About'>
			<Heading>About Me</Heading>
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
		</Container>
	);
}
