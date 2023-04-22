import {
	Box,
	Container,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';

const images = [
	{
		id: 1,
		name: 'HTML',
		image:
			'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png',
	},
	{
		id: 2,
		name: 'CSS',
		image:
			'https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png',
	},
	{
		id: 3,
		name: 'JavaScript',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFgMUxTR4ddExxqojtAvtiHgNBd1_DXFm3A&usqp=CAU',
	},
	{
		id: 4,
		name: 'ReactJS',
		image:
			'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
	},
	{
		id: 5,
		name: 'Redux',
		image:
			'https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55',
	},
	{
		id: 6,
		name: 'Chakra-UI',
		image: 'https://avatars.githubusercontent.com/u/54212428?s=280&v=4',
	},
	{
		id: 7,
		name: 'NodeJS',
		image:
			'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
	},
	{
		id: 8,
		name: 'ExpressJS',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgAuAwfMMDkwZScsLkBAeZ4GjyfB7GtIzcA&usqp=CAU',
	},
	{
		id: 9,
		name: 'MongoDB',
		image:
			'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
	},
	{
		id: 10,
		name: 'Mongoose',
		image: 'https://avatars.githubusercontent.com/u/7552965?s=400&v=4',
	},
	{
		id: 11,
		name: 'PostMan',
		image:
			'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png',
	},
	{
		id: 12,
		name: 'VS Code',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
	},
	{
		id: 13,
		name: 'Git',
		image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
	},
	{
		id: 14,
		name: 'AutoCAD',
		image:
			'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/autocad-icon.png',
	},
];

export default function Skills() {
	return (
		<Container maxW={'7xl'} mx={{base:3, lg:'auto'}} p={{base:4, lg:10}} id='Skills'>
			<Heading color={'blue.500'}>Skills</Heading>
			<SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={4} mt={20}>
				{images.map((el) => (
					<Box key={el.id} m='auto'>
						<Image src={el.image} alt={el.name} w={{base:'80px',lg:'150px'}} h={{base:'80px',lg:'150px'}} />
						<Text align={'center'} my={4}>
							{el.name}
						</Text>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
}
