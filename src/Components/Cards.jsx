import {
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { TechStackTags, WorkTypeTags } from './Tags';

export default function Cards(props) {
	const { name, desc, netlify, github, techStack, workType, image } = props;

	return (
		<Flex
			borderWidth='1px'
			borderRadius='lg'
			m='auto'
			w={{ sm: '400px', md: '400px', lg: 'full' }}
			height={'700px'}
			direction='column'
			bg={useColorModeValue('white', 'gray.900')}
			boxShadow={'2xl'}
			justifyContent={{ sm: 'center', lg: 'space-evenly' }}
			alignItems='center'
			padding={6}
			gap={{ sm: 4, lg: 6 }}
		>
			<Flex flex={1}>
				<Image src={image} alt='ssense-app' maxW='full' />
			</Flex>

			<Flex
				flex={1}
				flexDirection='column'
				justifyContent='space-evenly'
				alignItems='flex-start'
				p={1}
			>
				<WorkTypeTags arr={workType} />
				<TechStackTags arr={techStack} />
				<Heading
					fontSize={{ sm: 'lg', md: 'xl', lg: '2xl' }}
					fontFamily={'body'}
					mt={2}
				>
					{name}
				</Heading>
				<Text
					textAlign={'justify'}
					color={useColorModeValue('gray.700', 'gray.400')}
					mt={2}
					fontSize={{ sm: '14px', lg: '16px' }}
				>
					<strong>About: -</strong> {desc}
				</Text>

				<Flex
					gap={10}
					mt={2}
					direction={'row'}
					padding={2}
					justifyContent={'space-evenly'}
					alignItems={'center'}
					w={'full'}
				>
					<Link
						_hover={{ textDecoration: 'none' }}
						target='_blank'
						href={netlify}
					>
						<Button
							w={{ sm: 10, md: 16, lg: 24 }}
							flex={1}
							fontSize={{ md: 'sm', lg: 'md' }}
							rounded={'full'}
							bg={'blue.500'}
							color='white'
							_hover={{
								bg: 'blue.200',
							}}
							_focus={{
								bg: 'blue.700',
							}}
						>
							Website
						</Button>
					</Link>
					<Link
						_hover={{ textDecoration: 'none' }}
						target='_blank'
						href={github}
					>
						<Button
							w={{ sm: 10, md: 16, lg: 24 }}
							flex={1}
							fontSize={{ md: 'sm', lg: 'md' }}
							rounded={'full'}
							bg={'blackAlpha.900'}
							color={'white'}
							boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%)'}
							_hover={{
								bg: 'blackAlpha.700',
							}}
							_focus={{
								bg: 'blackAlpha.400',
							}}
						>
							GitHub
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
}

{
	/* <Box zIndex='1' width='100%' position='absolute' height='100%'>
        <Box
            bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
            )}
            backgroundSize='20px 20px'
            opacity='0.4'
            height='100%'
        />
    </Box> */
}
