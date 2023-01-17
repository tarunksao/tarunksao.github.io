import {
	Container,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';

export default function Experience() {
	return (
		<Container maxW={'7xl'} py={10} id='Experience' minH={'700px'}>
			<Heading color={'blue.500'}>Experience</Heading>
			<VStack mt={10} gap={2}>
				<Flex
					direction={{base:'column', sm: 'column', lg: 'row' }}
					mb={4}
					alignItems='flex-start'
					justifyContent='space-between'
					gap={10}
				>
					<Heading color={'blue.500'} fontSize='3xl'>
						Quality Engineer (QA/QC)
					</Heading>
					<VStack alignItems={'flex-start'}>
						<Text>
							<strong>Company: -</strong> K. P. & Grandsons
						</Text>
						<Text>
							<strong>Work: -</strong> Boiler Pressure & Non-pressure Parts
							Manufacturing, Fabrication & Erection.
						</Text>
						<Text>
							<strong>Location: -</strong> Siltara, Raipur, Chhattisgarh
						</Text>
					</VStack>
				</Flex>
				<Text fontWeight={'bold'} alignSelf={'flex-start'}>
					Roles & Responsibilities: -
				</Text>
				<UnorderedList
					display={'flex'}
					flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
					gap={4}
				>
					<ListItem>
						Estimation of raw materials required for the project.
					</ListItem>
					<ListItem>
						Drafting pressure parts of the Boiler using AutoCAD.
					</ListItem>
					<ListItem>
						Ensuring product quality as per the droughted design.
					</ListItem>
					<ListItem>
						Documentation for Quality Check & IBR certifications.
					</ListItem>
					<ListItem>
						Maintaining records of machine calibration & maintenance.
					</ListItem>
				</UnorderedList>
			</VStack>
		</Container>
	);
}
