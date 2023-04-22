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
		<Container maxW={'7xl'} mx={{base:3, lg:'auto'}} py={10} id='experience'>
			<Heading color={'blue.500'}>Experience</Heading>
			<Flex 
				direction={{base:'column', sm: 'column', lg: 'row' }} 
				mt={10} 
				gap={{base:4, lg:40}}
				alignItems='flex-start'
				justifyContent='center'
				>
				<Flex
					direction='column'
					mb={4}
					alignItems='flex-start'
					justifyContent='space-between'
					gap={10}
					w={{base:'350px', sm:'500px'}}
				>
					<Heading color={'blue.500'} fontSize='3xl'>
						Quality Engineer (QA/QC)
					</Heading>
					<VStack alignItems={'flex-start'} gap={2} ml={4}>
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
				<VStack gap={4} ml={8}>
					<Text fontWeight={'bold'} alignSelf={'flex-start'} ml={-8}>
						Roles & Responsibilities: -
					</Text>
					<UnorderedList display='flex' flexDir='column' gap={4} w={{base:'300px', sm:'500px'}}>
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
			</Flex>
		</Container>
	);
}
