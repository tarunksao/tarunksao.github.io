import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
	return (
		<Container maxW={'7xl'} p={10} id='github'>
			<Heading fontSize='30px' mb={10} color={'blue.500'}>
				GitHub Calendar
			</Heading>
			<GitHubCalendar
				username='tarunksao'
				year='last'
				// theme={'Theme'}
				blockMargin={4}
				blockRadius={20}
				blockSize={20}
				color='blue'
			/>
			<Flex
				justifyContent='space-evenly'
				flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
			>
				<Box m='auto' mt={10}>
					<Image
						src='https://github-readme-stats.vercel.app/api?username=tarunksao&show_icons=true&locale=en'
						alt='tarunksao'
					/>
				</Box>

				<Box m='auto' mt={10}>
					<Image
						src='https://github-readme-streak-stats.herokuapp.com/?user=tarunksao&'
						alt='tarunksao'
					/>
				</Box>
			</Flex>
		</Container>
	);
}
