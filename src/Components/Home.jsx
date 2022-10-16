import {
	Box,
	Container,
	Flex,
	Heading,
	Icon,
	Image,
	Text,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<Container maxW={'full'} px={10} pt={24}>
				<Flex justifyContent={'space-evenly'} gap={10}>
					<Box>
						<Heading fontSize='50px' mt='80px' color={'blue.500'}>
							Hi, I am Tarun Kumar Sao
						</Heading>
						<Text fontSize='20px' mt='40px' w='500px'>
							An Aspiring Full Stack Web Developer, looking forward to utilize
							my skills in order to create or rework on applications, alwyas
							ready to learn and make use of new skillsets, with a mind set of
							try and fail again and again till you suceed.{' '}
						</Text>
						{/* <Flex>
							<FaGithub />
						</Flex> */}
					</Box>
					<Box>
						<Image
							src='https://avatars.githubusercontent.com/u/107460801?v=4'
							alt='myImage'
							borderRadius={'full'}
						/>
					</Box>
				</Flex>
			</Container>
		</>
	);
}
