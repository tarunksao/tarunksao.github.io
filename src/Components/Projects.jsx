import {
	Badge,
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import SSENSE_APP from '../Images/SSENSE_APP.png';

export default function Projects() {
	return (
		<Container maxW={'7xl'} p={10} id='Projects'>
			<Heading fontSize='30px' mb={20}>
				Recent Project
			</Heading>
			<Box>
				<Flex gap={10}>
					<Box>
						<Image src={SSENSE_APP} alt='ssense-app' w='400px' h='300px' />
					</Box>
					<Box>
						<VStack>
							<Flex gap={2}>
								<Badge color='blue'>Individual</Badge>
								<Badge color='blue'>E-Commerce</Badge>
							</Flex>
							<Flex gap={2}>
								<Badge color='teal'>HTML</Badge>
								<Badge color='teal'>CSS</Badge>
								<Badge color='teal'>JavaScript</Badge>
								<Badge color='teal'>ReactJS</Badge>
								<Badge color='teal'>JSON-Server</Badge>
							</Flex>
						</VStack>
					</Box>
				</Flex>
			</Box>
		</Container>
	);
}
