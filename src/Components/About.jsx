import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<Container maxW={'7xl'} p={10} id='About Me'>
			<Heading color={'blue.500'}>About Me</Heading>
			<Flex
				direction={{ base: 'column-reverse', md: 'row' }}
				justifyContent={{ base: 'center', lg: 'space-evenly' }}
				alignItems={{ base: 'center' }}
				gap={10}
			>
				<Box>
					<Text
						fontSize={{ base: '14px', md: '16px', lg: '20px' }}
						mt={{ base: '10px', md: '25px', lg: '40px' }}
						w={{ base: '250px', md: '350px', lg: '500px' }}
						textAlign='justify'
					>
						An Aspiring Full Stack Web Developer, looking forward to utilize my
						skills in order to create or rework on applications, alwyas ready to
						learn and make use of new skillsets, with a mind set of try and fail
						again and again till you suceed.
					</Text>
				</Box>
				<Box>
					<Image
						src='https://sagaratechnology.com/blog/wp-content/uploads/2020/09/1_LEH5tUEQReWe8Iu-UEV3Pg.gif'
						alt='about-gif'
						w={{ md: '250px', lg: '400px' }}
					/>
				</Box>
			</Flex>
		</Container>
	);
}
