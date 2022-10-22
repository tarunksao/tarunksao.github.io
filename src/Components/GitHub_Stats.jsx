import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

export default function GitHub_Stats() {
	return (
		<Container maxW={'6xl'}>
			<Heading fontSize='30px' mt={20} mb={10}>
				GitHub Stats
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
			<Flex justifyContent='center' gap={'40px'} mt={10}>
				<Box>
					<Image
						src='https://github-readme-stats.vercel.app/api?username=tarunksao&show_icons=true&locale=en'
						alt='tarunksao'
					/>
				</Box>

				<Box>
					<Image
						src='https://github-readme-streak-stats.herokuapp.com/?user=tarunksao&'
						alt='tarunksao'
					/>
				</Box>
			</Flex>
		</Container>
	);
}
