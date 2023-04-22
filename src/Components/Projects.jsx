import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { ProjectData } from '../Data/Projects';
import Cards from './Cards';

export default function Projects() {
	return (
		<>
			<Container
				maxW={'7xl'}
				py={10}
				id='Projects'
				mb={10}
				maxH='auto'
			>
				<Heading fontSize={'30px'} color={'blue.500'}>
					My Projects
				</Heading>
				<Box mt={10}>
					<SimpleGrid
						columns={{ sm: 1, md: 2, lg: 3 }}
						m='auto'
						spacing='20px'
						justifyContent='center'
						alignItems='center'
					>
						{ProjectData.map((project) => (
							<Cards
								key={project.id}
								name={project.name}
								desc={project.desc}
								netlify={project.netlify}
								github={project.github}
								techStack={project.techStack}
								workType={project.workType}
								image={project.image}
							/>
						))}
					</SimpleGrid>
				</Box>
			</Container>
		</>
	);
}
