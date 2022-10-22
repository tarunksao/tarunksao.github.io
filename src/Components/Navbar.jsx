// import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	HStack,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, animateScroll as scroll } from 'react-scroll';

const links = ['About', 'Skills', 'Experience', 'Projects'];

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				bg={useColorModeValue('gray.100', 'gray.900')}
				px={{ base: 6, lg: 10 }}
				pos='fixed'
				w={'full'}
			>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Link
							to='Home'
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							<Text fontWeight={'bold'} fontSize='25px'>
								Tarun
							</Text>
						</Link>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}
						>
							{links.map((link) => (
								<Link
									key={link}
									to={`${link}`}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{link}
								</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
							<Button
								variant={'solid'}
								colorScheme={'teal'}
								size={'sm'}
								borderRadius='20px'
								mr={4}
								display={{ base: 'none', md: 'flex' }}
							>
								Contact Me
							</Button>

							<Menu>
								<MenuButton
									as={Button}
									rounded={'full'}
									variant={'link'}
									cursor={'pointer'}
									minW={0}
								>
									<Avatar
										size={'sm'}
										src={
											'https://media-exp1.licdn.com/dms/image/C4E03AQF3THAIdQs4hA/profile-displayphoto-shrink_400_400/0/1593631237800?e=1671667200&v=beta&t=b4WLSL4VFxf6J5YoUwxEYXydIoQIZqANxASZPqjxDeI'
										}
									/>
								</MenuButton>
								<MenuList>
									<MenuItem>My Resume</MenuItem>
									<MenuItem>GitHub</MenuItem>
									<MenuDivider />
									<MenuItem>LinkedIn</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{links.map((link) => (
								<Link
									key={link}
									to={`${link}`}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{link}
								</Link>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
